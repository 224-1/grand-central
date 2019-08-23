(ns xtnt-micro.newsfeed
  (:use
   [hiccup.core :refer :all]
   [hiccup.page :refer :all]
   [compojure.route  :refer [resources]]))

(defn feedfunc
	[request]
	(html5
   [:head (include-css "newfeed.css")(include-css "skeleton2.css")(include-css "normalize2.css")]
   [:body
    [:div.wrap
     [:div.sidenav {:class "three columns"}
      [:img.logo {:src "https://i.imgur.com/cD7suBe.png"}]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/50/000000/home.png" :width "25px"} "Home"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/48/000000/hashtag.png" :width "25px"} "Explore"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/appointment-reminders.png" :width "25px"} "Notifications"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/100/000000/envelope-number.png" :width "25px"} "Messages"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png" :width "25px"} "Bookmarks"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/list.png" :width "25px"} "Lists"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/contract-job.png" :width "25px"} "Profile"]]
      [:a#listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/50/000000/more.png" :width "25px"} "More"]]
      [:button.button2 [:img {:src "https://i.imgur.com/CSx4pOj.png" :width "15px"}] "Create"]
      ]
     ]
    ]
         ))

