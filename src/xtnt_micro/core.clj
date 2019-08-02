(ns xtnt-micro.core
  (:require [xtnt-micro.table :as tbl]
            [ring.adapter.jetty     :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core         :refer [defroutes GET]]
            [compojure.route        :refer [not-found resources]]
            [hiccup.core            :refer :all]
            [hiccup.page            :refer :all]))

(defn boiler-plate
  [request]
  (html5 {:lang "en"}
         [:head (include-css "dashboard.css") (include-css "normalize.css") (include-css "skeleton.css")]
         [:body [:h1 "Boilerplate for Clojure Ring based server"]]))

(defroutes app
  (resources "/")
  (GET "/" [] boiler-plate)
  (GET "/table" [] tbl/table)
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

