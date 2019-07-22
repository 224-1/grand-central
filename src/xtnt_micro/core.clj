;;TODO #1 Boilerplate Clojure Ring based server

;;[ ] 0: Add the Ring, Hiccup, Compojure library as a dependency
;;[ ] 1: Add Ring, Hiccup, Compojure in the namespace
;;[ ] 2: Add a main and -dev-main function to run a Jetty webserver
;;[ ] 3: Configure the project's main namespace
;;[ ] 4: Run webserver using lein run 8000
;;[ ] 5: Check the output by goung http://localhost:8000

(ns xtnt-micro.core
  (:require [ring.adapter.jetty     :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core         :refer [defroutes GET]]
            [compojure.route        :refer [not-found]]
            [hiccup.core            :refer :all]
            [hiccup.page            :refer :all]))

(defn boiler-plate
  [request]
  (html5 {:lang "en"}
         [:body [:h1 "Boilerplate for Clojure Ring based server"]]))

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

(defroutes app
  (GET "/" [] boiler-plate)
  (GET "/forms" [] forms)
  (not-found "<h1>Page not found</h1>"))

(defn -main
	"A very simple web server using Ring and Jetty"
	[port-number]
	(jetty/run-jetty app
                   {:port (Integer. port-number)}))


(defn -dev-main
	"A very simple web server using Ring and Jetty"
	[port-number]
	(jetty/run-jetty (wrap-reload #'app)
                   {:port (Integer. port-number)}))

