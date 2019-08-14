# Add clojurescript, figwheel, reagent / reframe to existing clojure project #

The first thing to change in order to accommodate Figwheel Main is in ***project.clj***.
A new version of ClojureScript is necessary:
```
:dependencies
[ ;; … more dependencies …
  [org.clojure/clojurescript "1.10.312"]
  ;; … more dependencies …
]
```
Then, new values for ***:source-paths and :resource-paths:***
```
:source-paths ["src/clj" "src/cljs"]
:resource-paths ["target" "resources"]
```
As the Figwheel Main README suggests, let’s add a couple of useful aliases:
```
 :aliases
    {"fig" ["trampoline" "run" "-m" "figwheel.main"]
     "build-dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}
```
##### If you want to run the command from shell or terminal:
```
lein trampoline run -m figwheel.main -- -b dev -r
```
##### This will launch a REPL and start autobuilding and reloading the src directory so that any files you add or change in that directory will automatically be hot reloaded into the browser.
##### The ***-b dev or --build dev*** flag option is indicating that Figwheel should read ***dev.cljs.edn*** for build configuration.
##### The ***-r or --repl*** flag indicates that a REPL should be launched.
##### using the aliases.
###### You can invoke the above command using the fig alias like so:
```
lein fig -- -b dev -r
```
###### You can also just use the build-dev alias to get the same result:
```
lein build-dev
```
And the actual ***Figwheel Main dependencies***:
```
:profiles
  {:dev
   {:dependencies [[com.bhauman/figwheel-main "0.1.4"]
                   [com.bhauman/rebel-readline-cljs "0.1.4"]]}}
```
With project.clj ready, Now move to ***dev.cljs.edn***. Create a file with name ***dev.cljs.edn***. 
This is what Figwheel Main needs to know the entry point of my application:
```
{:main example.core}
;;In xtnt-micro project case it is {:main xtnt-micro.core}
```
Create a file with name ***figwheel-main.edn:***
```
{:watch-dirs ["src/cljs"]
 :css-dirs ["resources/public/css"]}
```
Using your own HTML to host your app

> If would prefer to use your own HTML page to host your application instead of the default page served by figwheel.main 
> You will first need to ensure that you have added resources to the :paths key in deps.edn, as demonstrated above.
> After that, you can place the index.html in resources/public/index.html so that it will mask the one served by the figwheel.main helper application.
> The following is some example HTML to help you get started. 
> The trickly part is the path to the ClojureScript bootstrap file. 
> The default output path is available at cljs-out/[build-id]-main.js. 
> So in this case it will be: cljs-out/dev-main.js
```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="app"></div>
    <script src="cljs-out/dev-main.js"></script>
  </body>
</html>
```
> You can place CSS and other static assets in the resources/public directory.
    

After implementing above all now we can run cider-jack-in-cljs. Then we need to choose figwheel-main from the given list. Enter dev in mini-buffer when asked.


References

> [Figwheel](https://figwheel.org/) 

>[Figwheel Tutorial](https://figwheel.org/tutorial)

>[Bhauman Figwheel-main](https://github.com/bhauman/figwheel-main/blob/master/doc/figwheel-main-options.md)
