(ns xtnt-micro.websclient
  (:require [reagent.core :as reagent :refer [atom]]
            [haslett.client :as ws]
            [haslett.format :as fmt]
            [cljs.core.async :as a :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(goog-define websocket-url "ws://localhost:8000/ws")

(enable-console-print!)

(defonce messages (atom {}))

(defn msg-typed []
  [:div (into [:ul] (map #(vector :li %) @messages))])

(defn msg-data []
  [:div#test
   [:form
    ;; {:on-submit (fn [x]
    ;;               (.preventDefault x)
    ;;               (reset! messages nil))}
    [:input#msgval {:type "text"
             :on-change #(reset! messages (-> % .-target .-value))
             }]
    ;; [:input {:type "submit" :onClick #(reset! messages (-> % .-target .-value))}]
    ;; [:button {:onclick } "Send"]
    ]
   ]
  )

(defn update-msg []
  (let [div (-> js/document
                .-getElementById "msgval")]
    (js/console.log (. div -value))))

(update-msg)

(defn msg-body []
  [:div
   (msg-typed)
   (msg-data)])

;; try weavejester/haslett as a cljs websocket library
(go (let [stream (<! (ws/connect websocket-url {:format fmt/json}))]
      (>!
       (:sink stream)
       {:type "echo" :data "something"}
       ;; "{\"type\":\"echo\",\"data\":\"haha\"}"
       ;; "\"message\""
       )
      (println (<! (:source stream)))
      (ws/close stream)))

(reagent/render-component [msg-body] (. js/document (getElementById "app")))
