(defproject xtnt-micro "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [ring/ring-json "0.4.0"]
                 [http-kit "2.3.0"]
                 [ring/ring-devel "1.7.1"]
                 [compojure "1.6.1"]
                 [ring-cors "0.1.13"]
                 ;;To run the server we need to add jetty-adapter
                 [ring/ring-jetty-adapter "1.4.0"]
                 ;;For clojurescript
                 [org.clojure/clojurescript "1.10.520"]
                 [hiccup "1.0.5"]]

  :repl-options {:init-ns xtnt-micro.core}
  ;;For clojurescript you need to add this
  :plugins [[lein-cljsbuild "1.1.7"]]
  :source-paths ["src/clj"]
  :cljsbuild {
              :builds [{
                        :source-path "src/cljs"
                        :compiler {
                                   :output-to "resources/public/xtnt-micro.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}


  :main xtnt-micro.core)
