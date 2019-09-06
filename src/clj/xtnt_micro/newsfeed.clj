(ns xtnt-micro.newsfeed
  (:use
   [ring.adapter.jetty :as jetty]
   [hiccup.core :refer :all]
   [hiccup.page :refer :all]
   [compojure.core :refer [defroutes GET]]
   [compojure.route  :refer [resources]]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.reload :refer [wrap-reload]]))

(defn feedfunc
	[request]
	(html5
[:head (include-css "css/newsfeed.css" "css/skeleton2.css" "css/normalize2.css")
 [:title "NEWSFEED"]
 [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
 [:link {:href "https://fonts.googleapis.com/css?family=Ubuntu&display=swap" :rel "stylesheet"}]
 [:link {:href "https://fonts.googleapis.com/css?family=Quicksand&display=swap" :rel "stylesheet"}]
 
 ]
   [:body
    [:div.wrap
     [:div.sidenav {:class "three columns"}
      [:img.logo {:src "https://i.imgur.com/cD7suBe.png"}]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/50/000000/home.png" :width "25px"} "Home"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/48/000000/hashtag.png" :width "25px"} "Explore"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/appointment-reminders.png" :width "25px"} "Notifications"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/10
0/000000/envelope-number.png" :width "25px"} "Messages"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/bookmark-ribbon.png" :width "25px"} "Bookmarks"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/list.png" :width "25px"} "Lists"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/64/000000/contract-job.png" :width "25px"} "Profile"]]
      [:a.listlogo {:href "#"} [:img {:src "https://img.icons8.com/ios-filled/50/000000/more.png" :width "25px"} "More"]]
      [:button.button2 "New feed"]
      ]
     ]
    [:div.container {:class "seven columns"}
     [:div.feedheader
      [:img.backarrow {:src "https://i.imgur.com/4Nl0VnV.png" :width "40px"}]
      [:h4.lol "Xtnt-Micro"]
      [:p "1 Million Followers"]
      ]
     [:div.feedstory
      [:div.storyimg
       [:img {:src "https://i.imgur.com/cJ8nJ6y.jpg" :width "100%" :height "320px"}]
       [:button.followbtn {:class "blocks"} "Follow"]
       [:a {:href "#"} [:img#threedots {:src "https://i.imgur.com/CD3yfjO.png" :width "38px"}]]
       ]
      [:br]
      [:div.storyinfo
       [:div.heading
        [:h4 "Xtnt-Micro"]
        [:p "@xtntmicro"]
        [:p [:a {:href "#"} "#xtntindia"]]
        [:p "A refreshing, eclectic mix of news and developments from around the globe. Follow us for all the latest trends in Home, Lifestyle, Travel, Fashion & Technology."]
        [:br]
        [:p#storylabel "221 Following"]
        [:p#storylabel "1M  Followers"]
        [:br]
        [:p.inlinks {:class "storyimgicon"} [:img {:src "https://img.icons8.com/ios-filled/24/000000/marker.png" :width "17px"}]"2nd main, Indranagar"]
        [:p.inlinks {:class "storyimgicon"} [:img {:src "https://img.icons8.com/ios-filled/24/000000/link.png" :width "17px"}]"about.xtnt"]
        [:p.inlinks {:class "storyimgicon"} [:img {:src "https://img.icons8.com/ios-filled/24/000000/calendar.png" :width "17px"}]"Established 2018"]
        [:div.understory
         [:img {:src "https://i.imgur.com/rNo8zhD.jpg" :id "storyicons" :width "15px" :height "15px"}]
         [:img {:src "https://i.imgur.com/TC1PdNM.png" :id "storyicons" :width "15px" :height "15px"}]
         [:img {:src "https://i.imgur.com/q0V6HGg.jpg" :id "storyicons" :width "15px" :height "15px"}]
         [:p#underpara "Followed by Parikshith M and Rupam Maz"]
         ];;understory end
        ];;heading end
       ];;storyinfo end
      ];;feedstory end
     [:div.topnav
      [:a#points {:class "active" :href "#Feed"} "Feed"]
      [:a#points {:href "#Comments"} "Comments"]
      [:a#points {:href "#Replies"} "Replies"]
      [:a#points {:href "#Likes"} "Likes"]
      ];;topnav end
     [:hr#underlisthr {:align "center" :width "100%"}]
     [:div.newsfeeder
      [:div.feeds
       [:img#feedlinker {:src "https://i.imgur.com/LnXkPt6.png" :width "55px"}]
       [:h4 {:id "feedsh2"} "Xtnt-Micro"]
       [:p#feedsp1 "Aug 15"]
       [:img {:src "https://i.imgur.com/byPM9aZ.png" :width "35px" :id "expandimage" }]
       [:p#feedsp2 "Code Jam, our longest-running coding competition, just wrapped its 16th season in San Francisco. Congrats to all finalists, especially Gennady Korotkevich on his 6th consecutive #CodeJam win. 🎉 (link: http://xtnt.in/codejam) xtnt.in/codejam"]
       [:img#feedstoryimage {:src "https://i.imgur.com/uDj7mnk.jpg"}]
       [:div.feedattach
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/fI3DJHg.png" :width "30px"}] "66"]]
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/mmr5p1J.png" :width "30px"}] "59"]]
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/4tF2HPt.png" :width "30px"}] "700"]]        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/wmvqVum.png" :width "30px"}] ""]]
        ];;feedattach end
       ];;feeds end
      [:hr { :id "underfeedhr"}]
      ];;newsfeeder end
     ];;container end
    [:div.rightcontainer
     [:div.searchbar {:id "searchbar1"}
      [:input#searchinput {:type "search" :placeholder "Search Xtnt"}]
      ];;searchbar end
     [:div.trending
      [:div#trendheader [:h4 "Trending Now"[:img {:src "https://i.imgur.com/abfHau1.png" :width "25px"}]]
       ]
      [:hr {:id "trendhr"}]
      [:div.trendcontent
       [:h5 "#ThePradaSong"]
       ];;trendcontent end
      [:hr#trendhr]
      [:div.trendcontent
       [:h5 "#ElonMusk"]
       ];;trendcontent end
      [:hr#trendhr]
      [:div.trendcontent
       [:h5 "#NewTrafficRules"]
       ];;trendcontent end
      [:hr#trendhr]
      [:div.trendcontent
       [:h5 "#amityuniversity"]
       ];;trendcontent end
      [:hr#trendhr]

      [:div#showmore
       [:a {:href "#"} [:p "Show More"]]
       ];;showmore end

      ];;trending end
     [:div.mightlike
      [:div#mightlikeheader [:h4 "You Might Like" [:img {:src "https://i.imgur.com/abfHau1.png" :width "25px"}]]]
      [:hr#trendhr]
      [:div.mlikecontent
       [:a.mc
        {:href ""} [:img {:src "https://img.icons8.com/color/48/000000/devpost.png"}]]
       [:a.mc {:href ""} [:label "Deftone"] [:button.mfollowbtn "Follow" ]]
       [:p.mc "@deftone_xtnt"]
       ];;mlikecontent end
      [:hr#trendhr]
      [:div.mlikecontent
       [:a.mc {:href ""} [:img {:src "https://img.icons8.com/ios/50/000000/circled-v.png"}]]
       [:a.mc {:href ""} [:label "Vamos Digital"] [:button.mfollowbtn "Follow" ]]
       [:p.mc "@vamosllp"]
       ];;mlikecontent end
      [:hr#trendhr]
      [:div#showmore
       [:a {:href "#"} [:p "Show More"]]
       ];;showmore end
      ];;mightlike end
     [:div.terms
      [:ul
       [:a {:href ""} [:li "Terms"]]
       [:a {:href ""} [:li "Privacy Policy"]]
       [:a {:href ""} [:li "Cookies"]]
       [:a {:href ""} [:li "Ads Info"]]
       ]
      ];;terms end
     [:div.footertag
      [:p [:img {:src "https://img.icons8.com/material-outlined/30/000000/copyright.png" :width "15px"}] "2018 Xtnt, llc."]
      ]
     ];;rightcontainer end
    ]
   ))
