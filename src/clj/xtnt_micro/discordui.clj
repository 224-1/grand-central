(ns xtnt-micro.discordui
  (:use
   [ring.adapter.jetty :as jetty]
   [hiccup.core :refer :all]
   [hiccup.page :refer :all]
   [compojure.core :refer [defroutes GET]]
   [compojure.route  :refer [resources]]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.reload :refer [wrap-reload]]))

(def state (atom
            {:user_name "Parikshith"
             :user_id "#6228"
             :user_logo "https://i.imgur.com/6SRX0td.png"
             :home "Home"
             :channel {:xtnt{:name "XTNT"
                             :room ["xtnt-micro","horizon","horizon-system-t","horizon-t19","dev-support","lounge","forge-music","forge-controller"]
                             :voice
                             ["lounge","support","training","dev","r&d","testing & documentation","ui/ux","backend & db"]}}
             :members{
                      :product{:count "2"
                               :username ["azureus","hobbes"]
                               }

                      :dev {:count "4"
                            :username ["Parikshith","Vikram","kavya","baishakhi"]
                            }

                      :intern {:count "3"
                               :username ["Noobno1","cheesepopcorn99","vazir"]
                               }

                      :offline {:count "4"
                                :username ["Amadeus","GSD47","Vicaay","Sushil"]}}
             :logos ["https://i.imgur.com/zn6kLLT.png",
                     "https://i.imgur.com/0FBdAYu.png",
                     "https://i.imgur.com/S1Tc0oi.png",
                     "https://i.imgur.com/NUNWrWP.png",
                     "https://i.imgur.com/8A9JwAO.png"]}))

(defn head []
  [:head (include-css "css/discordui.css" "css/skeleton.css" "css/normalize.css")
   [:title "DISCORD-UI"]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
   [:link {:href "https://fonts.googleapis.com/css?family=Lato&display=swap" :rel "stylesheet"}]])

(defn home []
  [:div#home.c1_ele [:img {:src "https://i.imgur.com/YD8cAku.png" :width "51px"}]])

(defn container_1 []
  [:div.container_1
   (home)
   [:hr.c1_hr ]
   [:div#forge_channel.c1_ele [:img {:src "https://i.imgur.com/5Nddaj9.png" :width "51px"}]]
   [:div#xtnt_channel.c1_ele.left-border [:img {:src "https://i.imgur.com/5qpZZMo.png" :width "51px" :style "border-radius:15px;"}]]
   [:div#plus_c1.c1_ele.c1_op [:img {:src "https://i.imgur.com/L0oSuHh.png" :width "22px"}]]
   [:div#search_c1.c1_ele.c1_op [:img {:src "https://i.imgur.com/bBN1Xwg.png" :width "22px"}]]
   [:hr.c1_hr]
   [:div#download_c1.c1_ele.c1_op [:img {:src "https://i.imgur.com/phXJURZ.png" :width "22px"}]]])

(defn container_2_head []
  [:div.container_2_head
   [:div.c2_head
    [:p (-> @state :channel :xtnt :name)]
    [:img#c2_expand {:src "https://i.imgur.com/Nzf1e1i.png" :width "24px"}]]])

(defn container_2_rooms []
  (map #(identity [:div.c2_rooms
                   [:img {:src "https://i.imgur.com/N0zt5ji.png" :width "23px"} [:ul [:li %]]]
                   [:br]
                   ])
       (-> @state :channel :xtnt :room)))

(defn container_2_voices []
  (map #(identity [:div.c2_rooms
                   [:img {:src "https://i.imgur.com/wpabDPl.png" :width "23px"} [:ul [:li %]]]
                   [:br]
                   ])
       (-> @state :channel :xtnt :voice)))

(defn container_2_footer []
  [:div.container_2_footer
   [:div.user_details
    [:img#c2_userlogo {:src (:user_logo @state) :width "35px"}]
    [:p#c2_username (:user_name @state)]
    [:p#c2_userid (:user_id @state) ]
    ]
   [:div#settings.c2_footer_icon [:img {:src "https://i.imgur.com/eBKL08g.png" :width "19px"}]]
   [:div#headphones.c2_footer_icon [:img {:src "https://i.imgur.com/BMf07ds.png" :width "19px"}]]
   [:div#mic.c2_footer_icon [:img {:src "https://i.imgur.com/aSmfWmk.png" :width "19px"}]]
   ])

(defn container_2 []
  [:div.container_2
   (container_2_head)
   [:div.c2_channels
    [:div.interaction_room
     [:div.c2_ir_head
      [:img {:src "https://i.imgur.com/oRG1PtF.png" :width "14px"}]
      [:p "interaction room"]]
     (container_2_rooms)]
    [:div.voice_channel
     [:div.c2_vc_head.c2_ir_head
      [:img {:src "https://i.imgur.com/oRG1PtF.png" :width "14px"}]
      [:p "voice channels"]]
     (container_2_voices)]]
   (container_2_footer)])

(defn main_header []
  [:div.main_header
   [:img#mh_hash.mh_text {:src "https://i.imgur.com/N0zt5ji.png" :width "26px"}
     [:p#mh_p.mh_text (-> @state :channel :xtnt :room first)]]
   [:div.main_header_icons
    [:div#help.mh_right_icon [:img {:src "https://i.imgur.com/OeBFn9V.png" :width "22px"}]]
    [:div#mentions.mh_right_icon [:img {:src "https://i.imgur.com/PxV9PsS.png" :width "21px"}]]
    [:input#searchbar.mh_right_icon {:type "search" :placeholder "Search"}]
    [:div#members.mh_right_icon [:img {:src "https://i.imgur.com/FaMlvnI.png" :width "24px"}]]
   [:div#pinned.mh_right_icon [:img {:src "https://i.imgur.com/xOeGTTW.png" :width "24px"}]]
   [:div#notification.mh_right_icon [:img {:src "https://i.imgur.com/WFH5qXj.png" :width "24px"}]]]])

(defn chat_holder []
  [:div.chat_holder
   [:img#github_img {:src "https://i.imgur.com/QCHNgYc.png" :width "40px"}]
   [:div#github_head
    [:p#github_tag "GitHub" [:img {:src "https://i.imgur.com/mFNoGHB.png" :width "30px"}]]
    [:p#github_date "Last Friday at 5:23 PM"]]
   [:div.chat_received
    [:div.chat_received_head
     [:img#chat_userlogo {:src "https://i.imgur.com/APLLPNU.png" :width "25px"}]
     [:p#chat_username (:user_name @state)]
     [:p#chat_content_head "[224-1/xtnt-micro] New comment on issue #35: Migrate trello page from clojure to clojurescript"]
     [:div#chat_content
     [:p "@azureus89 tried with trampoline also,followed the steps cider-jack-in-cljs -->figwheel-main later dev,Error"]
     [:p "[Figwheel] Validating figwheel-main.edn
(ns xtnt-auth.datasource
  (:require [hikari-cp.core :refer :all]))
(def datasource-options {:adapter
(defn get-ds []
  (defonce ds (make-datasource datasource-options))
  {:datasource ds})
Don't know how to create ISeq from: clojure.lang.Keyword"]
      [:p"you are not using any database right now, you're trying to connect to one that isn't there, look up h2 .."]]]]])

(defn container_3 []
  [:div.container_3
   [:div.c3_contents
    (chat_holder)
    (chat_holder)
    ]
   [:div.messaging
    [:div#plus_c3 [:img {:src "https://i.imgur.com/KNUm5uW.png" :width "24px"}]]
    [:div#type_message [:input {:type "text" :placeholder "Message #xtnt-micro"}]]
    [:div#smiley_c3.messaging_right_icon [:img {:src "https://i.imgur.com/jYWODeK.png" :width "24px"}]]
    [:div#gif_c3.messaging_right_icon [:img {:src "https://i.imgur.com/FKFEuzz.png" :width "40px"}]]
    [:div#gift_c3.messaging_right_icon [:img {:src "https://i.imgur.com/ZOUVr8g.png" :width "23px"}]]]])

(defn rand-logo []
  (rand-nth (-> @state :logos)))

(def rand-color ["#e01f63","#117e67","#dcddde","#9b59b6","#3397da"])

(defn product_c4 []
  [:div.product_c4
   [:div.product_head
    [:p.c4_header "Product -" (-> @state :members :product :count)]]
   (map #(identity [:div.product_members
                    [:img {:src (rand-logo) :width "35px"} [:p {:style (str "color:" (rand-nth rand-color)";")} %]]
                      [:br]])
          (-> @state :members :product :username))])

(defn dev_c4 []
  [:div.dev_c4
   [:div.dev_head
    [:p#dev_p.c4_header "Dev - " (-> @state :members :dev :count)]]
   (map #(identity [:div.dev_members
                    [:img {:src (rand-logo) :width "35px"} [:p {:style (str "color:" (rand-nth rand-color)";")} %]]
                    [:br]])
        (-> @state :members :dev :username))])

(defn intern_c4 []
  [:div.intern_c4
   [:div.intern_head
    [:p#intern_p.c4_header "Intern - " (-> @state :members :intern :count)]]
   (map #(identity [:div.intern_members
                    [:img {:src (rand-logo) :width "35px"} [:p {:style (str "color:" (rand-nth rand-color)";")} %]]
                    [:br]])
        (-> @state :members :intern :username))])

(defn offline_c4 []
  [:div.offline_c4
   [:div.offline_head
    [:p#offline_p.c4_header "Offline - " (-> @state :members :offline :count)]]
   (map #(identity [:div.offline_members
                    [:img {:src (rand-logo) :width "35px"} [:p {:style (str "color:" (rand-nth rand-color)";")} %]]
                    [:br]])
        (-> @state :members :offline :username))])

(defn container_4 []
  [:div.container_4
   [:div
    (product_c4)
    (dev_c4)
    (intern_c4)
    (offline_c4)]])

(defn discord_ui
  [request]
  (html5
   [:html
    (head)
    (container_1)
    (container_2)
    (main_header)
    (container_3)
    (container_4)]))
