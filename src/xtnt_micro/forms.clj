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
         [:head (include-css "style.css")]
         [:link {:href "https://fonts.googleapis.com/css?family=Roboto&display=swap" :rel "stylesheet"}]
         [:meta {:name "viewport" :content "width=device-width initial-scale=1"}]
		     [:body
          [:div.container
          [:h3 "Form element 1 (Form and input)"]
           [:br]
          [:div.form1
           [:form "First Name:"
            [:br]
            [:input {:type "text" :placeholder "xtnt"}]
            [:br][:br]
            "Last Name:"
            [:br]
            [:input {:type "text" :placeholder "frnt"}]
            [:br][:br]
            "Choose:"
            [:input {:type "radio"} "YES"]
            [:input {:type "radio"} "NO"]
            [:input {:type "checkbox"} "TRUE"]
            [:input {:type "checkbox"} "FALSE"]
            [:br][:br]
            [:input {:type "submit" :name "Submit"}]
            [:br][:br][:br]
            [:hr]
            ]
           ]
           [:br]
          [:h3 "Form element 2 (select and option)"]
          [:br]
          [:div.form2
           [:select {:name "Cars" :size "2"}
            [:option {:value "volvo"} "VOLVO"]
            [:option {:value "fiat"} "FIAT"]
            [:option {:value "ford"} "FORD"]
            [:option {:value "tata"} "TATA"]
            [:option {:value "kia"} "KIA"]
            ]
           ]
           [:br][:br]
           [:hr]
           [:br]
           [:h3 "Form element 3 (Text-field)"]
          [:br]
          [:div.form3
           [:textarea {:name "message" :rows "10" :cols "50" :placeholder "TYPE HERE!!!"}]
           ]
           [:br][:br]
           [:hr]
           [:br]
           [:h3 "Form element 4 (Button)"]
           [:br]
         [:div.form4
          [:button {:on-click [:p "hello"]} "Click Me!!!"]
          ]
         [:br][:br] [:hr] [:br]
         [:h3 "Form element 5 (datalist/dropdown)"]
         [:br]
         [:div.form5
          [:form
           [:input {:list "browsers" :placeholder "click me!"}]
           [:datalist {:id "browsers"}
            [:option {:value "Chrome"}]
            [:option {:value "Firefox"}]
            [:option {:value "Opera"}]
            [:option {:value "Safari"}]
            ]
           [:button "submit"]
           [:br][:br]
           ]
          ]
           ]
          ]
	       )
  )
