(ns xtnt-micro.core
  (:require [reagent.core :as reagent :refer [atom]]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :as async :include-macros true]))

;; Clojurescript syntax pointers

;; There are several syntax forms in clojurescript to access properties.
;; The dot form, thread first/last formats increase readability of the code.
;; The property must always be preceded by a hyphen: -{property}
;; On the other hand, a function invocation should not be preceded by a hyphen.

;; Accessing property, for example getting the title property on the document.

;; For example -
;; JS Code: document.title
;; Cljs Code standard: (.-title js/document)
;; Cljs Code dot form: (. js/document -title)
;; Cljs Code in thread first format: (-> js/document .-title)
;; Cljs Code in thread last format: (->> js/document .-title)

;; Obtaining nested properties, for example location.href property

;; For example -
;; Js Code: document.location.href
;; Cljs Code standard: (.-href (.-location js/document))
;; Cljs Code dot form: (. (. js/document -location) -href)
;; Cljs Code in thread first format: (-> js/document .-location .-href)
;; Cljs Code in thread last format: (->> js/document .-location .-href)

;; Since nested dots also become difficult to read, the 'double-dot speacial form'
;; is used to alleviate nesting.

;; For example -
;; Js Code: document.location.href.length
;; Cljs Code standard: (.-length (.-href (.-location js/document)))
;; Cljs Code dot form: (. (. (. js/document -location) -href) -length)
;; Cljs double dot : (.. js/document -location -href -length)
;; Cljs Code in thread first format: (-> js/document .-location .-href .-length)
;; Cljs Code in thread last format: (->> js/document .-location .-href .-length)

;; Clojurescript allows accessing Javascript object methods and invoking function calls
;; Note that there's no hyphen (-) preceding method.

;; Example 1 -

;; Js Code: document.hasFocus()
;; Cljs Code standard: (.hasFocus js/document)
;; Cljs Code dot form: (. js/document hasFocus) or (. js/document (hasFocus))
;; Cljs Code in thread first format: (-> js/document .hasFocus)
;; Cljs Code in thread last format: (->> js/document .hasFocus)

;; Example 2 -

;; Js Code: document.getElementsByTagName("html")
;; Cljs Code dot form: (. js/document getElementsByTagName "html")
;;                  or (. js/document (getElementsByTagName "html"))
;; Cljs Code in thread first format: (-> js/document (.getElementsByTagName "html"))

;; The set! command is mostly used to set native javascript object properties to
;; a value, equivalent of '=' operator in javascript.

;; Example 1 -
;; (set! (.-var1 scope) "Value")
;; where scope is a js object.

;; Example 2 -
;; Js Code: window.location.search = "foo=bar"
;;
;; Cljs Code in thread first format: (set! (-> js/window .-location .-search) "foo=bar")
;; Cljs Code in thread last format: (set! (->> js/window .-location .-search) "foo=bar")
;; Cljs Code duouble-dot form: (set! (.. js/window -location -search) "foo=bar")

;; The defonce command is used for our global state that enables
;; us to perform hot reloading.
;; The state is kept exactly as it is upon changing the code that
;; provides instant feedback.

;; For example -
;; (defonce app-state (atom {:a 1
;;                           :b 2}))

;; An alternative to set! is using aset which is reserved
;; exclusively for '(js-obj)' type javascript objects

;; aset and aget are not intended for property access or assignment. They are
;; explicitly for use with native Js arrays

;; For example -
;; (aset scope "var2" "Value")

(goog-define ws-url "ws://localhost:9500/ws")

(enable-console-print!)

(println ws-url)

(defonce app-state (atom {:text "Hello world!"
                          :active-panel :login
                          :user "test"}))

(defonce msg-list (atom []))
(defonce users (atom {}))
(defonce send-chan (async/chan))

;; Websocket Routines

(defn send-msg
  [msg]
  (async/put! send-chan msg))

(defn send-msgs
  [svr-chan]
  (async/go-loop []
    (when-let [msg (async/<! send-chan)]
      (async/>! svr-chan msg)
      (recur))))

(defn receive-msgs
  [svr-chan]
  (async/go-loop []
    (if-let [new-msg (:message (<! svr-chan))]
      (do
        (case (:m-type new-msg)
          :init-users (reset! users (:msg new-msg))
          :chat (swap! msg-list conj (dissoc new-msg :m-type))
          :new-user (swap! users merge (:msg new-msg))
          :user-left (swap! users dissoc (:msg new-msg)))
        (recur))
      (println "Websocket closed"))))

(defn setup-websockets! []
  (async/go
    (let [{:keys [ws-channel error]} (async/<! (ws-ch ws-url))]
      (if error
        (println "Something went wrong with the websocket")
        (do
          (send-msg {:m-type :new-user
                     :msg (:user @app-state)})
          (send-msgs ws-channel)
          (receive-msgs ws-channel))))))
;; View Code

(defn chat-input []
  (let [v (atom nil)]
    (fn []
      [:div {:class "text-input"}
       [:form
        {:on-submit (fn [x]
                      (.preventDefault x)
                      (when-let [msg @v] (send-msg {:msg msg
                                                    :user (:user @app-state)
                                                    :m-type :chat}))
                      (reset! v nil))}
        [:div {:style {:display "flex"
                       :flex-direction "column"}}
         [:input {:type "text"
                  :value @v
                  :placeholder "Type a message to send to the chatroom"
                  :on-change #(reset! v (-> % .-target .-value))}]
         [:button {:type "submit"
                   :class "button-primary"} "Send"]]]])))

(defn chat-history []
  (reagent/create-class
    {:render (fn []
               [:div {:class "history"}
                (for [m @msg-list]
                  ^{:key (:id m)} [:p (str (:user m) ": " (:msg m))])])
     :component-did-update (fn [this]
                             (let [node (reagent/dom-node this)]
                               (set! (.-scrollTop node) (.-scrollHeight node))))}))

(defn login-view []
  (let [v (atom nil)]
    (fn []
      [:div {:class "login-container"}
       [:div {:class "login"}
        [:form
         {:on-submit (fn [x]
                       (.preventDefault x)
                       (swap! app-state assoc :user @v)
                       (swap! app-state assoc :active-panel :chat)
                       (setup-websockets!))}
         [:input {:type "text"
                  :value @v
                  :placeholder "Pick a username"
                  :on-change #(reset! v (-> % .-target .-value))}]
         [:br]
         [:button {:type "submit"
                   :class "button-primary"} "Start chatting"]]]])))

(defn sidebar []
  [:div {:class "sidebar"}
   [:h5 "Active Users:"]
   (into [:ul]
         (for [[k v] @users]
           ^{:key k} [:li v]))])

(defn chat-view []
  [:div {:class "chat-container"}
   [chat-history]
   [chat-input]
   [:div {:class "header"}
    [:h3 "WebSocket"]]
   [sidebar]])

(defn app-container
  []
  (case (:active-panel @app-state)
    :login [login-view]
    :chat [chat-view]))

(reagent/render-component [app-container]
                          (. js/document (getElementById "app")))

