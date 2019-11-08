(ns xtnt-micro.wsmsg
  (:require [reagent.core :as reagent :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :as async])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(goog-define websocket-url "ws://localhost:8000/msg")

(defonce messages (atom []))

(enable-console-print!)

(go
  (let [{:keys [ws-channel error]} (async/<! (ws-ch websocket-url))]
    (println "from client")
    (if-not error
      (async/>! ws-channel "Hello server from client")
      (println error))))

(go
  (let [{:keys [ws-channel]} (async/<! (ws-ch websocket-url))
        {:keys [message]} (async/<! ws-channel)]
    (println "got message from server:" message)))