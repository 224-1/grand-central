(ns xtnt-micro.login
  (:require [reagent.core :as r]
            [ajax.core :refer [GET POST]]))

(defn atom-username [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn atom-password [value]
  [:input {:type "password"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn shared-state []
  (let [username (r/atom "")
        password (r/atom "")]
    (fn []
      [:div
       [:h1 "Welcome to Sign in-Page"]
       [:div.loginBox
        [:p "Enter Username: " [atom-username username]]
        [:p "Enter Password: " [atom-password password]]
        [:button {:type "submit" :on-click (
                                           fn []
                                            (POST "http://localhost:4000/create-auth-token"
                                                {:params {:username @username
                                                          :password @password}
                                                 :handler handler
                                                 :error-handler error-handler
                                                 :format :json
                                                 :keywords? true}))} "Login"]]])))

(defn app-container []
  (shared-state))

(r/render-component [app-container]
                          (. js/document (getElementById "app")))


