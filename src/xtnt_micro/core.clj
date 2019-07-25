;;TODO #1 Boilerplate Clojure Ring based server

;;[ ] 0: Add the Ring, Hiccup, Compojure library as a dependency
;;[ ] 1: Add Ring, Hiccup, Compojure in the namespace
;;[ ] 2: Add a main and -dev-main function to run a Jetty webserver
;;[ ] 3: Configure the project's main namespace
;;[ ] 4: Run webserver using lein run 8000
;;[ ] 5: Check the output by goung http://localhost:8000

(ns xtnt-micro.core
  (:require
            [xtnt-micro.forms :as frm]
            [ring.adapter.jetty     :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core         :refer [defroutes GET]]
            [compojure.route        :refer [not-found resources]]
            [hiccup.core            :refer :all]
            [hiccup.page            :refer :all]))

(defn boiler-plate
  [request]
  (html5 {:lang "en"}
         [:head (include-css "forms.css") (include-css "main.css")
          [:link {:href "https://fonts.googleapis.com/css?family=Roboto&display=swap" :rel "stylesheet"}]
          ]
         [:body [:h1 "Boilerplate for Clojure Ring based server"]]))

(defroutes app
  (GET "/" [] boiler-plate)
  (GET "/forms" [] frm/forms)
  (resources "/")
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



