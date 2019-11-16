(ns xtnt-micro.wsmsg
  (:require [reagent.core :as reagent :refer [atom]]))

(goog-define websocket-url "ws://localhost:8000/msg")

(defonce messages (atom []))

(enable-console-print!)

;; try weavejester/haslett as a cljs websocket library
