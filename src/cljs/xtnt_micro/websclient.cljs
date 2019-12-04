(ns xtnt-micro.websclient
  (:require [goog.dom :as gdom]
            [reagent.core :as r :refer [atom]]
            [haslett.client :as ws]
            [haslett.format :as fmt]
            [cljs.core.async :as a :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
;;{"type":"echo","data":"dsdf"}
(goog-define websocket-url "ws://localhost:8000/ws")

(enable-console-print!)

;; -----
;; DATA
;; -----
(defonce messages (atom {}))
(defonce message-id (atom 0))
(defonce message-to-send (atom {:type "echo" :data ""}))

;; ----
;; FX
;; ----
;; simple message id creator
(defn make-id []
  (let [id @message-id]
    (swap! message-id inc)
    id))

;; convert array-map to edn hash map for storage
(defn to-edn [msg]
  (let [msg-keys (map keyword (keys msg))
        msg-vals (vals msg)]
    (zipmap msg-keys msg-vals)))

;; -----
;; EVENTS
;; -----
;; Recieve messages
(defn recieve-message [msg]
  (let [id (make-id)
        msg-edn (to-edn msg)]
    (swap! messages assoc-in [id] msg-edn)))

;; Send messages
(defn send-message [msg]
  (prn msg))

;; (defn update-dom []
;;   (let [dom (-> js/document (.getElementById "mytext"))]
;;     (swap! message-to-send assoc :data (. dom -value))))

;; -----
;; SUBS
;; -----
;; Open / operate websocket
;; open a connection to the server from an extneral websocket tool like websocket.org
;; send a broadcast message, the go-loop will pick it up - as many as you like
;; the previous go block was not a loop, it would run once - send one message to sink
;; read one message from source, and then shut down - clearly not helpful

(go-loop []
  (let [stream (<! (ws/connect websocket-url {:format fmt/json}))]
    (if stream
      (do
        (send-message (>! (:sink stream)
                          ;; {:type "broadcast" :data "some"}
                          @message-to-send
                          ))
        (recieve-message (<! (:source stream)))
        ;; (recur)
        )
      (ws/close stream))
    ;; (recur)
    )
  ;; (recur)
  )

;; -----
;; VIEW
;; -----
(defn message-list []
  [:div
   [:ul
    (map #(vector :li {:key (key %)} (-> % val :data)) @messages)]])

(defn textbox []
  (let [v (atom "")]
   [:div#test
   [:form
    {:on-submit (fn [x] (.preventDefault x) (swap! @message-to-send assoc :data @v))}
    [:input#mytext {:type "text"
                    :defaultValue "some"
                    :value @v
                    :on-change #(reset! v (-> % .-target .-value))
                    }]
    [:br]
    [:button {
              :type "submit"
              ;; :onClick update-dom
              } "Send"]
    ]
    ]))

(defn msg-body []
  [:div
   (message-list)
   (textbox)])

;; -----
;; RENDER / MOUNT
;; -----
(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (r/render-component [msg-body] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))
