(ns xtnt-micro.websclient
  (:require [goog.dom :as gdom]
            [reagent.core :as r]
            [haslett.client :as ws]
            [haslett.format :as fmt]
            [cljs.core.async :as a :refer [<! >! put! take!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))
;;{"type":"echo","data":"dsdf"}
(goog-define websocket-url "wss://localhost:8000/ws")

(enable-console-print!)

;; -----
;; DATA
;; -----
(defonce messages (r/atom {}))
(defonce message-id (atom 0))
(defonce form-message (r/atom {:type "broadcast" :data "xxt"}))
(defonce stream-channel (r/atom ""))
;; (def stream-channel (take! (ws/connect websocket-url {:format fmt/json})))

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

;; Receive test
(swap! messages assoc-in [0] {:type "broadcast" :data "some data"})

;; SOLVE THIS NOW AND NOTHING ELSE
;; 1. Connect to the websocket server and keep the connection open
;; 2. Recieve messages being sent from somewhere else and store it in the atom
;; 3. reagent component to display all messages as [:p] elements
;; 4. Commit

;; WRITE MESSAGES TO BE DISPLAYED
;; 1. Send a hard coded message via websocket from within cljs file
;; 1. Create a reagent form-2 component consisting of a textbox and a submit button
;; 2. Write messages inside the texbox and store it in an atom upon submitting
;; 3. Message to be sent from within the atom via websocket

(defn submit-message []
  (go
    (send-message (>! (:sink stream-channel) @form-message))))

(go-loop []
  (let [stream (<! (ws/connect websocket-url {:format fmt/json}))]
    (if stream
      (reset! stream-channel stream)
      (do
        (receive-message (<! (:source stream)))
        (recur))
      (ws/close stream))))

(defn send-message-form []
  (let [v (r/atom "")]
    (fn []
      [:form {:on-submit (fn [e]
                           (.preventDefault e)
                           (swap! form-message assoc :data @v)
                           (submit-message))}
       [:input {:type "text"
                :value @v
                :on-change #(reset! v (-> % .-target .-value))}]
       [:br]
       [:Button {:type "submit"} "Send"]])))

(defn message-received []
  [:div
   [:ul
    (map #(vector :li {:key (key %)} (:data (val %))) @messages)]])

(defn msg-body []
  [:div
   [(send-message-form)]
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
