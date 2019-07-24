(ns xtnt-micro.forms
  (:require [ring.adapter.jetty     :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core         :refer [defroutes GET]]
            [compojure.route        :refer [not-found]]
            [hiccup.core            :refer :all]
            [hiccup.page            :refer :all]))

(defn forms
	[request]
	(html5 {:lang "en"}
		     [:body
          "Form element 1 (Form and input)"
          [:div.form1
           [:form "First Name:"
            [:br]
            [:input {:type "text" :name "firstname" :value "pk"}]
            [:br]
            "Last Name:"
            [:br]
            [:input {:type "text" :name "firstname" :value "mo"}]
            [:br]
            [:input {:type "submit" :name "Submit"}]]
           ]
          [:br]
          "Form element 2 (select and option)"
          [:br]
          [:div.form2
           [:select {:name "Cars" :size "2"}
            [:option {:value "volvo"} "VOLVO"]
            [:option {:value "fiat"} "FIAT"]
            [:option {:value "ford"} "FORD"]
            ]
           ]
          [:br]
          "Form element 3 (Button)"
          [:br]
          [:div.form3
           [:textarea {:name "message" :rows "10" :cols "50"}]
           ]
          ]
         [:br] "Form element 4" [:br]
         [:div.form4
          [:button {:on-click [:p "hello"]} "Click Me!!!"]
          ]
         [:br]
         "Form element 5 (datalist)"
         [:br]
         [:div.form5
          [:form
           [:input {:list "browsers"}]
           [:datalist {:id "browsers"}
            [:option {:value "Chrome"}]
            [:option {:value "Firefox"}]
            [:option {:value "Opera"}]
            [:option {:value "Safari"}]
            ]
           [:button "submit"]
           ]
          ]
	       )
  )
