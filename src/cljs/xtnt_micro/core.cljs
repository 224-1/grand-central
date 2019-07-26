(ns xtnt-micro.core)

[:html
 [:head
  [:script {:type "text/javascript", :src "https://www.google.com/jsapi"}]
  
  [:script {:type "text/javascript"

            (def data #js [])
            (def timestamps #js [])

            (def socket (js/WebSocket.  "ws://localhost:8080/happiness"))

            (set!
             (.-onmessage socket)
             (fn [event]
               (.push data (aget (.parse js/JSON (.-data js/event)) "happiness"))
               (.push timestamps (new Date))
               (refreshChart)))

            (defn refreshChart
              []
              (js (.LineChart Chartkick) "chart" (zip #js [timestamps data])))


            (defn zip
              [arrays]
              (.map (aget arrays 0) (fn [_ i] (.map arrays (fn [array] (aget array i))))))}]]
 [:body
  [:div {:id "chart", :style "height: 300px;"}]
  ]]


