(ns xtnt-micro.signup
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
  (.log js/console (str "User added successfully" response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "User already exist " status " " status-text)))

(defn shared-state []
  (let [username (r/atom "")
        password (r/atom "")]
    (fn []
      [:div
       [:h1 "Welcome to Sign in-Page"]
       [:div.signUpBox
        [:p "Enter Username: " [atom-username username]]
        [:p "Enter Password: " [atom-password password]]
        [:button {:type "submit" :on-click (
                                           fn []
                                            (POST "http://localhost:4000/sign-up"
                                                {:params {:username @username
                                                          :password @password}
                                                 :handler handler
                                                 :error-handler error-handler
                                                 :format :json
                                                 :keywords? true}))} "Sign Up"]]])))

(defn app-container []
  (shared-state))

(r/render-component [app-container]
                          (. js/document (getElementById "app")))
