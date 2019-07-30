(ns xtnt-micro.table
  (:require [ring.adapter.jetty     :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [compojure.core         :refer [defroutes GET]]
            [compojure.route        :refer [not-found resources]]
            [hiccup.core            :refer :all]
            [hiccup.page            :refer :all]))

(defn table
  [request]
  (html5 {:lang "en"}
         [:head (include-css "normalize.css") (include-css "skeleton.css") (include-css "dashboard2.css") (include-css "dashboard.css") ]
         [:body
          [:div.header
           [:div.container
            [:nav
             [:img {:src "https://i.imgur.com/KoW054C.png"}]
             [:ul
              [:li [:a {:href "#"}"Home"]]
              [:li [:a {:href "#"}"Projects"]]
              [:li [:a {:href "#"}"Team"]]
              [:li [:a {:href "#"}"Contact Us"]]
              ]
             ]
            ]
           ]
          [:div.sidebar {:class "slide"}
           [:a {:class "active" :href "#"}"frnt"]
           [:a {:class "active" :href "#"}"forge"]
           [:a {:class "active" :href "#"}"deftune"]
           [:a {:class "active" :href "#"}"social-media"]
           ]
          [:div.row
           [:div.cust {:class "container"}
            [:div.block1 {:class "seven columns"}
             [:div.inter1 [:label "LISTS"]]
             [:div.inter2
              [:ul
               [:li "Item 1" [:label "750$"]]
               [:li#gray "Item 2" [:label "500$"]]
               [:li "Item 3" [:label "700$"]]
               [:li#gray "Item 4" [:label "850$"]]
               ]
              ]]
            [:div.block1 {:class "five columns"}
             [:div.int1 [:label "CHARTS"]
              [:div.charter {:class "container column"}
               [:div.pie [:img {:src "https://i.imgur.com/HLpihkb.png"}]]
               ]
              [:div.cblock1 [:label#red "$158"]]
              [:div.cblock1 [:label#blue "$346"]]]
             ]]
           ]
          [:div.container {:class "tbl u-full-width"}
           [:div.block2 {:class " u-full-width"}
            [:table {:class "u-full-width"}
             [:label.tablehead "TABLE"]
             [:thead
              [:tr
               [:th "Name"]
               [:th "Age"]
               [:th "Sex"]
               [:th "Location"]
               ]
              ]
             [:tbody
              [:tr
               [:td "Dave Gamache"]
               [:td "26"]
               [:td "Male"]
               [:td "San Francisco"]
               ]
              [:tr
               [:td "Dwayne Johnson"]
               [:td"42"]
               [:td "Male"]
               [:td"Hayward"]
               ]
              [:tr
               [:td "Dwayne Johnson"]
               [:td"42"]
               [:td "Male"]
               [:td"Hayward"]
               ]
              [:tr
               [:td "Dwayne Johnson"]
               [:td"42"]
               [:td "Male"]
               [:td"Hayward"]
               ]
              ]
             ]
            ]]
          ]
         ))
