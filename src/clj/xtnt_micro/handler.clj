(ns xtnt-micro.handler
  (:require
   [ring.adapter.jetty     :as jetty]
   [compojure.core         :refer [defroutes GET]]
   [compojure.route        :refer [not-found resources]]
   [hiccup.core            :refer :all]
   [hiccup.page            :refer :all]
   [org.httpkit.server :refer[send! with-channel on-close on-receive run-server]]
   [clojure.tools.logging :as log]
   [cheshire.core :as json]
   [compojure.route :as route]
   [clojure.core.async :as async]
   [ring.util.response :as resp]
   [medley.core :refer [random-uuid]]
   [ring.middleware.reload :refer [wrap-reload]]
   [xtnt-micro.newsfeed :as news]
   [xtnt-micro.trelloui :as trlo]
   [xtnt-micro.discordui :as dscrd]))

;; Setup for chord based websocket example
;; Use a transducer to append a unique id to each message
;; (defonce main-chan (async/chan 1 (map #(assoc % :id (random-uuid)))))
;; (defonce main-mult (async/mult main-chan))
;; (def users (atom {}))


;; Chord based simple websocket example
;; (defn your-handler [req]
;;   (with-channel req ws-ch
;;     (async/go
;;       (let [{:keys [message]} (async/<! ws-ch)]
;;         (println (str "message received: " message))
;;         (async/>! ws-ch "Hello client from server")
;;         (async/close! ws-ch)))))

;; Chord based chat handler example
;; (defn ws-handler
;;   [req]
;;   (with-channel req ws-ch
;;     (let [client-tap (async/chan)
;;           client-id (random-uuid)]
;;       (async/tap main-mult client-tap)
;;       (async/go-loop []
;;         (async/alt!
;;           client-tap ([message]
;;                       (if message
;;                         (do
;;                           (async/>! ws-ch message)
;;                           (recur))
;;                         (async/close! ws-ch)))
;;           ws-ch ([{:keys [message]}]
;;                  (if message
;;                    (let [{:keys [msg m-type]} message]
;;                      (if (= m-type :new-user)
;;                        (do
;;                          (swap! users assoc client-id msg)
;;                          (async/>! ws-ch  {:id (random-uuid)
;;                                            :msg @users
;;                                            :m-type :init-users})
;;                          (async/>! main-chan (assoc message :msg {client-id (:msg message)})))
;;                        (async/>! main-chan message))
;;                      (recur))
;;                    (do
;;                      (async/untap main-mult client-tap)
;;                      (async/>! main-chan {:m-type :user-left
;;                                           :msg client-id})
;;                      (swap! users dissoc client-id)))))))))

;; Atom for channel set
(defonce channels (atom #{}))

;; Connect Channel
(defn connect! [channel]
  (swap! channels conj channel))

;; Disconnect Channel
(defn disconnect! [channel status]
  (swap! channels disj channel))

;; Echo message back on same channel
(defn echo [ch data]
  (send! ch (json/encode {:type "echo" :data data})))

;; Broadcast message to all channels
(defn broadcast [ch data]
  (let [msg (json/encode {:type "broadcast" :data data})]
    (run! #(send! % msg) @channels))
  (send! ch (json/encode {:type "broadcastResult" :data data})))

;; Error
(defn unknown-type-response [ch _]
  (send! ch (json/encode {:type "error" :data "ERROR: unknown message type"})))

;; on-receieve handler
(defn dispatch [ch msg]
  (let [parsed (json/decode msg)
        async-ch (async/chan)]
    (async/go (async/>! async-ch (get parsed "data")))
    (async/go-loop []
      ((case (get parsed "type")
       "echo" echo
       "broadcast" broadcast
       unknown-type-response)
       ch (async/<! async-ch)))))

;; Socket Handler - connect, recieve, dispatch, close
(defn ws-handler [request]
  (with-channel request channel
    (connect! channel)
    (on-close channel #(disconnect! channel %))
    (on-receive channel #(dispatch channel %))))

(defroutes app
  (GET "/" [] (resp/resource-response "index.html" {:root "public"}))
  (GET "/newsfeed" [] news/feedfunc)
;;  (GET "/trelloui" [] trlo/trello-ui)
;;  (GET "/discordui" [] dscrd/discord_ui)
  (GET "/trelloui" [] (resp/resource-response "trello.html" {:root "public"}))
  (GET "/discordui" [] (resp/resource-response "discord.html" {:root "public"}))
  (GET "/wsmsg" [] (resp/resource-response "wsmsg.html" {:root "public"}))
  (GET "/ws" [] ws-handler)
;;  (GET "/msg" [] your-handler)
  (route/resources "/")
  (route/not-found "<h1>Page not found</h1>"))

(defn -main []
  (run-server  (wrap-reload #'app) {:port 8000})
    (println (str "Server is running on port 8000")))
