(defproject xtnt-micro "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [org.clojure/core.async  "0.5.527"]
                 [org.clojure/tools.logging "0.3.1"]
                 [environ "1.1.0"]
                 [ring "1.7.1"]
                 [compojure "1.6.1"]
                 [http-kit "2.3.0"]
                 [cheshire "5.9.0"]
                 [reagent "0.8.1"]
                 [medley "1.1.0"]
                 [haslett "0.1.6"]
                 [jarohen/chord "0.8.1"]
                 [ring/ring-json "0.5.0"]
                 [hiccups "0.3.0"]
                 [cljs-ajax "0.8.0"]]
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
                           :source-map-timestamp true}}
                   :trlo {:source-paths ["src/cljs"]
                          :figwheel true
                          :compiler
                          {:main xtnt-micro.trelloui
                           :asset-path "cljs-out/trlo"
                           :output-to "target/public/cljs-out/trlo-main.js"
                           :output-dir "target/public/cljs-out/trlo"
                           :source-map-timestamp true}}
                   :dscrd {:source-paths ["src/cljs"]
                          :figwheel true
                          :compiler
                          {:main xtnt-micro.discordui
                           :asset-path "cljs-out/dscrd"
                           :output-to "target/public/cljs-out/dscrd-main.js"
                           :output-dir "target/public/cljs-out/dscrd"
                           :source-map-timestamp true}}
                   :webs {:source-paths ["src/cljs"]
                          :figwheel true
                          :compiler
                          {:main xtnt-micro.websclient
                           :asset-path "cljs-out/webs"
                           :output-to "target/public/cljs-out/webs-main.js"
                           :output-dir "target/public/cljs-out/webs"
                           :source-map-timestamp true}}
                   :login {:source-paths ["src/cljs"]
                           :figwheel true
                           :compiler
                           {:main xtnt-micro.login
                            :asset-path "cljs-out/login"
                            :output-to "target/public/cljs-out/login-main.js"
                            :output-dir "target/public/cljs-out/login"
                            :source-map-timestamp true}}
                   :signup {:source-paths ["src/cljs"]
                           :figwheel true
                           :compiler
                           {:main xtnt-micro.signup
                            :asset-path "cljs-out/signup"
                            :output-to "target/public/cljs-out/signup-main.js"
                            :output-dir "target/public/cljs-out/signup"
                            :source-map-timestamp true}}
                   }}

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
