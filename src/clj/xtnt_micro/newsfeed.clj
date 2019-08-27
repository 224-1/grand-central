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
    ]
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
      [:button.button2 [:img {:src "https://i.imgur.com/CSx4pOj.png" :width "15px"}] "Create feed"]
      ]
     ]
    [:div.container {:class "seven columns"}
     [:div.feedheader
      [:img.backarrow {:src "https://i.imgur.com/Q3upGH7.png" :width "30px"}]
      [:h4.lol "Xtnt-Micro"]
      [:p "1 Million Followers"]
      ]
     [:div.feedstory
      [:div.storyimg
       [:img {:src "https://i.imgur.com/cJ8nJ6y.jpg" :width "100%" :height "320px"}]
       [:button.followbtn {:class "blocks"} "Follow"]
       [:a {:href "#"} [:img#threedots {:src "https://i.imgur.com/9Qk9L2X.png" :width "40px"}]]
       ]
      [:br]
      [:div.storyinfo
       [:br]
       [:div.heading
        [:h3 "Xtnt-Micro"]
        [:p "@xtntmicro"]
        [:p [:a {:href "#"} "#xtntindia"]]
        [:br]
        [:label#storylabel "221 Following"]
        [:label#storylabel "1M  Followers"]
        [:hr {:align "left" :id "storyhr"}]
        [:p.inlinks {:class "storyimgicon"} [:img {:src "https://img.icons8.com/ios-filled/24/000000/marker.png"}]"2nd main, Indranagar"]
        [:p.inlinks {:class "storyimgicon"} [:img {:src "https://img.icons8.com/ios-filled/24/000000/link.png"}]"about.xtnt"]
        [:p.inlinks {:class "storyimgicon"} [:img {:src "https://img.icons8.com/ios-filled/24/000000/calendar.png"}]"Established 2018"]
        [:div.understory
         [:img {:src "https://i.imgur.com/rNo8zhD.jpg" :id "storyicons" :width "25px" :height "25px"}]
         [:img {:src "https://i.imgur.com/TC1PdNM.png" :id "storyicons" :width "25px" :height "25px"}]
         [:img {:src "https://i.imgur.com/q0V6HGg.jpg" :id "storyicons" :width "25px" :height "25px"}]
         [:p "Followed by Parikshith M and Rupam Maz"]
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
       [:img#feedlinker {:src "https://i.imgur.com/LnXkPt6.png"}]
       [:h3 {:id "feedsh2"} "Xtnt-Micro"]
       [:p#feedsp1 "Aug 15"]
       [:p#feedsp2 "Code Jam, our longest-running coding competition, just wrapped its 16th season in San Francisco. Congrats to all finalists, especially Gennady Korotkevich on his 6th consecutive #CodeJam win. 🎉 (link: http://xtnt.in/codejam) xtnt.in/codejam"]
       [:img {:src "https://i.imgur.com/byPM9aZ.png" :width "35px" :id "expandimage" }]
       [:img#feedstoryimage {:src "https://i.imgur.com/uDj7mnk.jpg"}]
       [:div.feedattach
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/fI3DJHg.png" :width "30px"}] "66"]]
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/mmr5p1J.png" :width "30px"}] "59"]]
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/4tF2HPt.png" :width "30px"}] "700"]]
        [:a {:href "#"} [:label [:img {:src "https://i.imgur.com/wmvqVum.png" :width "30px"}] ""]]
        ];;feedattach end
       ];;feeds end
      [:br]
      [:hr { :id "underfeedhr"}]
      ];;newsfeeder end
     ];;container end
    [:div.rightcontainer
     [:div.searchbar {:id "searchbar1"}
      [:input#searchinput {:type "search" :placeholder "Search Xtnt"}]
      ];;searchbar end
     [:div.trending
      [:div#trendheader [:h4 "Trending Now"]]

      [:hr {:id "trendhr"}]

      [:div.trendcontent
       [:p "Trending in India"]
       [:label "#ThePradaSong"]
       [:p "1,422 Upvotes"]
       ];;trendcontent end
      [:hr#trendhr]
      [:div.trendcontent
       [:p "Trending in India"]
       [:label "#ElonMusk"]
       [:p "10,000 Upvotes"]
       ];;trendcontent end
      [:hr#trendhr]
      [:div#showmore
       [:a {:href "#"} [:label "Show More"]]
       ];;showmore end

      ];;trending end
     [:div.mightlike
      [:div [:h3 "You Might Like"]]
      [:hr#trendhr]
      [:div.mlikecontent
       [:a {:href ""} [:img {:src "https://img.icons8.com/color/48/000000/devpost.png"}]]
       [:a {:href ""} [:label "Deftone"]]
       [:p "@deftone_xtnt"]
       ];;mlikecontent end
      [:hr#trendhr]
      [:div.mlikecontent
       [:a {:href ""} [:img {:src "https://img.icons8.com/ios/50/000000/circled-v.png"}]]
       [:a {:href ""} [:label "Vamos Digital"]]
       [:p "@vamosllp"]
       ];;mlikecontent end
      [:hr#trendhr]
      [:div#showmore
       [:a {:href "#"} [:label "Show More"]]
       ];;showmore end
      ];;mightlike end
     [:hr#separatorhr]
     [:div.terms
      [:ul
       [:a {:href ""} [:li "Terms"]]
       [:a {:href ""} [:li "Privacy Policy"]]
       [:a {:href ""} [:li "Cookies"]]
       [:a {:href ""} [:li "Ads Info"]]
       ]
      [:div.dropdown
       [:button.dropbtn [:p "More"] [:img {:src "https://img.icons8.com/ios/30/000000/expand-arrow--v2.png" :width "20px"}]]
       [:div.dropdown-content
        [:a {:href "#"} "Link 1"]
        [:a {:href "#"} "Link 2"]
        [:a {:href "#"} "Link 3"]
        ];;dropdown-content end
       ];;dropdown end
      [:br]
      ];;terms end
     [:div.footertag
      [:p [:img {:src "https://img.icons8.com/material-outlined/30/000000/copyright.png" :width "15px"}] "2018 Xtnt, llc."]
      ]
     ];;rightcontainer end
    ]
   ))

