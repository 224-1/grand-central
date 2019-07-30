(ns xtnt-micro.forms
  (:require [ring.adapter.jetty     :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core         :refer [defroutes GET]]
            [compojure.route        :refer [not-found]]
            [compojure.route        :refer [resources]]
            [hiccup.core            :refer :all]
            [hiccup.page            :refer :all]))

(defn forms
	[request]
	(html5 {:lang "en"}
         [:head (include-css "forms.css") (include-css "main.css") (include-css "normalize.css") (include-css "skeleton.css")
         [:link {:href "https://fonts.googleapis.com/css?family=Roboto&display=swap" :rel "stylesheet"}]]
         [:meta {:name "viewport" :content "width=device-width initial-scale=1"}]
		     [:body
          [:div.container
           [:h3 "Form element set 1"]
           [:form
            [:div.row
             [:div {:class "four columns"} [:label "First Name:"]
              [:input {:type "email" :placeholder "Xtnt"}]]

             [:div {:class "four columns"} [:label "LastName:"]
              [:input {:type "password" :placeholder "Frnt"}]]

             [:label "Choose:"]
             [:div {:class "four columns"}[:input {:type "radio"}][:span {:class "label-body"} " YES"]]
             [:div {:class "four columns"}[:input {:type "radio" }][:span {:class "label-body"} " NO"]]
             ]

            [:div.row
             [:div {:class "four columns"} [:label "E-mail:"]
              [:input {:type "email" :placeholder "xyz@gmail.com"}]]

             [:div {:class "four columns"} [:label "Password:"]
              [:input {:type "password" :placeholder "********"}]]

             [:label "Check:"]
             [:div {:class "three columns"}[:input {:type "checkbox"}][:span {:class "label-body"} " TRUE"]]
             [:div {:class "three columns"}[:input {:type "checkbox"}][:span {:class "label-body"} " FALSE"]]

             [:div {:class "four columns"}[:input {:type "file" :class "custom-file-input" }]]
             [:input { :class "button-primary " :type "submit" :value "submit input"}]]
            ]
          [:hr]
          [:h3 "Form element set 2"]
          [:br]
           [:form
            [:div {:class "row"}
             [:div {:class "six columns"}
              [:label {:for "examplenumberInput"}"Your number: +91 -"]
              [:input {:class"u-full-width" :type "text" :placeholder "10 digits go here" }]
             ]
             [:div {:class "six columns"}
              [:label {:for "exampleRecipientInput"}"Reason for contacting"]
              [:select {:class "u-full-width" :id "exampleRecipientInput"}
               [:option {:value "Option 1" }"Questions"]
               [:option {:value "Option 2"}"Admiration"]
               [:option {:value="Option 3"}"Can I get your number?"]
               ]
              ]
             ]
            [:label {:for "exampleMessage"}"Message"]
            [:textarea {:class "u-full-width" :placeholder "queries go here"}]
            [:label
             [:input {:type "checkbox"}]
             [:span {:class "label-body"}"Send details to my number"]
             ]
            [:input {:class "button-primary" :type "submit" :value "Submit"}]
            ]
           [:hr]
           ]
          ]
	       )
  )
