;; Main clojurescript configuration file - project.cljs
;; Configuration of clojure dependencies and compilation targets
;; Plugin used to auto-compile clojurescript code to javascript called cljs-build
;; Beyond basic compiler support, Lein-cljsbuild has built-in support for launching clojurescript REPLs
;; -> lein trampoline cljsbuild-repl-rhino
;; lein cljsbuild auto command watches for changes in your source files and automatically rebuilds them

;; Main difference between Figwheel and cljsbuild is that figwheel features hotloading allowing interactive programming

(defproject xtnt-micro "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"


  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [org.clojure/core.async  "0.4.490"]
                 [ring "1.7.1"]
                 [compojure "1.6.1"]
                 [jarohen/chord "0.8.1"]
                 [reagent "0.8.1"]
                 [medley "1.1.0"]
                 [http-kit "2.4.0-alpha2"]]
  :main xtnt-micro.handler

  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["target" "resources"]
  :uberjar-name "xtnt-micro-standalone.jar"

  :aliases
    {"fig" ["trampoline" "run" "-m" "figwheel.main"]
     "build-dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}

  :profiles
   {:dev
    {:dependencies [[binaryage/devtools "0.9.10"]
                    [cider/piggieback "0.4.1"]
                    [com.bhauman/figwheel-main "0.2.3"]
                    [com.bhauman/rebel-readline-cljs "0.1.4"]
                    [figwheel-sidecar "0.5.19" :exclusions [[http-kit]]]]

     :main xtnt-micro.handler
     :cljsbuild
         {:builds {:dev {:source-paths ["src/cljs"]
                         :figwheel true
                         :compiler
                          {:main xtnt-micro.core
                           :asset-path "cljs-out/dev"
                           :output-to "target/public/cljs-out/dev-main.js"
                           :output-dir "target/public/cljs-out/dev"
                           :source-map-timestamp true}}}}

     :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
     ;; need to add the compliled assets to the :clean-targets
     :clean-targets ^{:protect false} ["target/public/cljs-out"
                                       :target-path]}


    :uberjar {:prep-tasks ["compile" ["cljsbuild" "once" "min"]]
              :aot :all
              :main xtnt-micro.handler
              :cljsbuild
               {:builds {:min
                         {:source-paths ["src/cljs"]
                          :compiler
                          {:output-to "target/public/cljs-out/dev-main.js"
                            :asset-path "cljs-out/dev"
                           :output-dir "target/public/cljs-out/dev"
                            :main xtnt-micro.core
                            :optimizations :advanced
                            :pretty-print false }}}}}})
