(ns xtnt-micro.websclient
  (:require [reagent.core :as reagent :refer [atom]]
            [haslett.client :as ws]
            [haslett.format :as fmt]
            [cljs.core.async :as a :refer [<! >!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(goog-define websocket-url "ws://localhost:8000/ws")

(enable-console-print!)

;; try weavejester/haslett as a cljs websocket library
(go (let [stream (<! ws/connect websocket-url)]
      (>! (:sink stream) "Hello server from client")
      (println (<! (:source stream)))
      (ws/close stream)))
