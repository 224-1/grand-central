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
(defn receive-message [msg]
  (let [id (make-id)
        msg-edn (to-edn msg)]
    (swap! messages assoc-in [id] msg-edn)))

;; Send messages
(defn send-message [msg]
  (prn msg))

;; SOLVE THIS NOW AND NOTHING ELSE
;; 1. Connect to the websocket server and keep the connection open
;; 2. Recieve messages being sent from somewhere else and store it in the atom
;; 3. reagent component to display all messages as [:p] elements
;; 4. Commit

(go-loop []
  (let [stream (<! (ws/connect websocket-url {:format fmt/json}))]
    (if stream
      (do
        (receive-message (<! (:source stream)))
        (recur))
      (ws/close stream))))

(defn message-received []
  [:div
   [:ul
    (map #(vector :li {:key (key %)} (:data (val %))) @messages)]])

(defn msg-body []
  [:div
   (message-received)])

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
