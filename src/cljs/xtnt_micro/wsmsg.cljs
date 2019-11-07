(ns xtnt-micro.wsmsg
  (:require [cljs.core.async :as async :include-macros true]
            [reagent.core :as reagent :refer [atom]]
            [chord.client :refer [ws-ch]]))

(defonce messages (atom []))

(enable-console-print!)

(swap! messages conj 1)

(println @messages)

(async/go
  (let [{:keys [ws-channel error]} (ws-ch "ws://localhost:8000/msg")]
    (if-not error
      (async/>! ws-channel "Hello server from client")
      (println "error"))))

(async/go
  (let [{:keys [ws-channel]} (ws-ch "ws://localhost:8000/msg")
        {:keys [message]} (async/<! ws-channel)]
    (println (str "Got message from server: " message))))

