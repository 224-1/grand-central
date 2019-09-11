(ns xtnt-micro.trelloui
  (:use
   [ring.adapter.jetty :as jetty]
   [hiccup.core :refer :all]
   [hiccup.page :refer :all]
   [compojure.core :refer [defroutes GET]]
   [compojure.route  :refer [resources]]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.reload :refer [wrap-reload]]))

(defn header
  [request]
  (html5
   [:head (include-css "css/trelloui.css" "css/skeleton31.css" "css/normalize31.css")
    [:title "TRELLO-UI"]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:link {:href "https://fonts.googleapis.com/css?family=Lato&display=swap" :rel "stylesheet"}]
    ]
   [:body
    [:div.header
     [:button.home [:img {:src "https://i.imgur.com/XXI76iG.png" :width "20px"}]]
     [:button.boards [:img {:src "https://i.imgur.com/2g4jyx5.png" :width "20px"}] [:label "Boards"]]
     [:input#searchbar {:type "search"}]
     [:h4.headtext [:img#headimage {:src "https://i.imgur.com/2g4jyx5.png" :width "25px"}]  "Trello"]
     [:button#login  "P"]
     [:button#notification [:img {:src "https://i.imgur.com/tRhMR7B.png" :width "20px"}]]
     [:button#info [:img {:src "https://i.imgur.com/b6rSiOO.png" :width "20px"}]]
     [:button#plus [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "20px"}]]
     ]

    [:div.teams
     [:h5#teamhead "TRLO_Sample"]
     [:button#star [:img {:src "https://i.imgur.com/XKQEePC.png" :width "20px"}]]
     [:h6.vr "|"]
     [:p#private "Private Team"]
     [:h6.vr "|"]
     [:button.teamvisible [:img {:src "https://i.imgur.com/xKYMuLH.png" :width "20px"}]  [:label "Team Visible"]]
     [:h6.vr "|"]
     [:button.teamlogo "P"]
     [:button.teamlogo "R"]
     [:button.teamlogo "P"]
     [:button.teamlogo "S"]
     [:button.teamlogo {:id "tls"} "+1"]
     [:button.invite "Invite"]
     [:button.showmenu [:img {:src "https://i.imgur.com/ZtVjj4S.png" :width "20px"}]  [:label "Show Menu"]]
     ]
    [:div.lists
     [:div.addcard
      [:div.cardhead
       [:label "Team 1"]
       [:img#expand {:src "https://i.imgur.com/ZtVjj4S.png" :width "20px"}]
       ]
      [:div.cards1
       [:p.cardcontent "Bomb Diffuser : RP"]
       ]
      [:div.cards
       [:p.cardcontent "Diffusal Squad : PM, SM, SJ, SK"]
       ]
      [:div.newcard
       [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}]
       [:p "Add another card"]
       ]
      ]
     [:button.addlist [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}] [:label "Add List"]]
     ]
    ]
   )
  )
