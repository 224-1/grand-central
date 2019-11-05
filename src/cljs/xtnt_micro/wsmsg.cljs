(ns xtnt-micro.wsmsg
  (:require [cljs.core.async :as async]
            [reagent.core :as reagent :refer [atom]]
            [chord.client :refer [ws-ch]]))

(goog-define websocket-url "ws://localhost:8000/msg")

(enable-console-print!)

(defonce messages (atom []))
(defonce sending-channel (async/chan))

(defn sending-message [msg]
  (async/put! sending-channel msg))

(defn sending-to-ws [chn]
  (async/go-loop []
    (when-let [msg (async/<! sending-channel)]
      (async/>! chn msg)
      (recur))))

(defn receiving-from-ws [chn]
  (async/go-loop []
    (if-let [new-message (:message (<! chn))]
      (do
        (swap! messages conj new-message)
        (recur)))))

(defn setup-ws []
  (async/go
    (let [{:keys [ws-channel error]} (async/<! (ws-ch websocket-url))]
      (if error
        (println "websocket not working")
        (do
          (sending-to-ws ws-channel)
          (receiving-from-ws ws-channel))))))

(setup-ws)

(defn chat-input []
  (let [v (atom nil)]
    (fn []
      [:form
       {:on-submit (fn [x]
                     (when-let [msg @v] (sending-message {:msg msg}))
                     (reset! v nil))}
       [:input {:type "text"
                :value @v
                :on-change #(reset! v (-> % .-target .-value))}]
       [:button {:type "submit"} "Send"]])))

(defn chat-history []
  ;; [:ul
  ;;  (for [msg @messages] [:li msg])]
  (reagent/create-class
   {:render (fn []
              [:div {:class "history"}
               (for [m @messages]
                 [:p (str m)])])
    :component-did-update (fn [this]
                            (let [node (reagent/dom-node this)]
                              (set! (.-scrollTop node) (.-scrollHeight node))))
    })
  )

(defn app-container []
  [:div
   [chat-history]
   [chat-input]
   ])

(reagent/render-component [app-container] (. js/document (getElementById "app")))
