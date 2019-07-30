;; Main clojurescript configuration file - project.cljs
;; Configuration of clojure dependencies and compilation targets
;; Plugin used to auto-compile clojurescript code to javascript called cljs-build
;; Beyond basic compiler support, Lein-cljsbuild has built-in support for launching clojurescript REPLs
;; -> lein trampoline cljsbuild-repl-rhino
;; lein cljsbuild auto command watches for changes in your source files and automatically rebuilds them

;; Main difference between Figwheel and cljsbuild is that figwheel features hotloading allowing interactive programming

(defproject xtnt-micro "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}

  ;; Project should specify its own dependency on clojurescript
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [ring "1.7.1"]
                 [compojure "1.6.1"]
                 [hiccup "1.0.5"]]

  ;; Version of plugin used using the plugin-depend key
  :plugins [[lein-cljsbuild "1.1.7"]]

  ;; All lein-cljsbuild-specific configuration is under :cljsbuild key
  :cljsbuild {
              ;; Clojurescript compiler configuration
              :builds [{
                        ;; The paths under which lein-cljsbuild will look for Clojurescript files to compile
                        :source-paths ["src-cljs"]

                        ;; Standard clojurscript compiler options
                        :compiler {
                                   ;; The path to the javscript file that will be the output
                                   :output-to "resources/public/hello.js"
                                   :optimizations :whitespace

                                   ;; Determines whether the js output will be tabulated in a human-readable manner
                                   :pretty-print true
                                   }
                        }]
              }

  :repl-options {:init-ns xtnt-micro.core}
  :main xtnt-micro.core
  :profiles {:dev
             {:main xtnt-micro.core/-dev-main}
             })
