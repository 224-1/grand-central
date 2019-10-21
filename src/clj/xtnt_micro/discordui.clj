(ns xtnt-micro.discordui
  (:require [ring.adapter.jetty :as jetty]
            [hiccup.core :refer :all]
            [hiccup.page :refer :all]
            [compojure.core :refer [defroutes GET]]
            [compojure.route  :refer [resources]]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]))

(def active-server (atom :0))
(def state (atom {:user_name "Parikshith"
                      :user_id "#6228"
                      :user_logo "https://i.imgur.com/6SRX0td.png"
                      :server {:0 {:name "XTNT"
                                   :rooms {:name "Interaction room"
                                           :list {:0 "xtnt-micro"
                                                  :1 "horizon"
                                                  :2 "horizon-system-t"
                                                  :3 "horizon-t15"
                                                  :4 "dev-support"
                                                  :5 "lounge"
                                                  :6 "forge-music"
                                                  :7 "forge-controller"}
                                           :active :0
                                           :logo "https://i.imgur.com/N0zt5ji.png"}
                                   :voice {:name "voice channel"
                                           :list {:0 "lounge"
                                                  :1 "support"
                                                  :2 "training"
                                                  :3 "dev"
                                                  :4 "r&d"
                                                  :5 "ui/ux"
                                                  :6 "backend & db"}
                                           :active nil
                                           :logo "https://i.imgur.com/wpabDPl.png"}}}
                      :members{:product ["azureus","hobbes"]
                               :dev ["Parikshith","Vikram","kavya","baishakhi"]
                               :intern ["Noobno1","cheesepopcorn99","vazir"]
                               :offline ["Amadeus","GSD47","Vicaay","Sushil"]}
                      :logos {:azureus "https://i.imgur.com/zn6kLLT.png"
                              :hobbes "https://i.imgur.com/0FBdAYu.png"
                              :Parikshith "https://i.imgur.com/S1Tc0oi.png"
                              :Vikram "https://i.imgur.com/NUNWrWP.png"
                              :kavya "https://i.imgur.com/8A9JwAO.png"
                              :baishakhi "https://i.imgur.com/zn6kLLT.png"
                              :Noobno1 "https://i.imgur.com/0FBdAYu.png" 
                              :cheesepopcorn99 "https://i.imgur.com/zn6kLLT.png"
                              :vazir "https://i.imgur.com/zn6kLLT.png"
                              :Amadeus "https://i.imgur.com/8A9JwAO.png"
                              :GSD47 "https://i.imgur.com/NUNWrWP.png"
                              :Vicaay "https://i.imgur.com/S1Tc0oi.png"
                              :Sushil "https://i.imgur.com/0FBdAYu.png"}
                      :color ["#e01f63","#117e67","#8E9297","#9b59b6","#3397da"]}))

(def messages (atom {:0 {:chat0{
                                :server 0
                                :channel :0
                                :sender "Parikshith"
                                :sender_logo "https://i.imgur.com/6SRX0td.png"
                                :type "bot"
                                :host ["GitHub","https://i.imgur.com/mFNoGHB.png"]
                                :subject "[224-1/xtnt-micro] New comment on issue #35: Migrate trello page from clojure to clojurescript"
                                :content "Context: Trying to add multiple outputs/targets in project-cljsbuild Issue: while adding multiple targets,facing issue. Logs: Loading c:/Users/welcome/AppData/Roaming/.emacs.d/core/core-load-paths.el (source)...done Loading c:/Users/welcome/AppData/Roaming/.spacemacs...done Setting the font...  (Spacemacs) Warning: Cannot find any of the specified fonts (Source Code Pro)! Font settings may not be correct. PNG warning: Interlace handling should be turned on when using png_rea...(Spacemacs) Warning: Cannot find any of the specified fonts (Source Code Pro)! Font settings may not be correct. PNG warning: Interlace handling should be turned on when using png_rea..."
                                :timestamp "Last Friday 11:39PM"
                                }
                         :chat1{
                                :server 0
                                :channel :0
                                :sender "azureus"
                                :sender_logo "https://i.imgur.com/zn6kLLT.png"
                                :type "direct"
                                :host ["direct","https://i.imgur.com/zn6kLLT.png"]
                                :content "@Devs from time to time update packages so that we are working on the latest nrepl / cider etc versions ... also update leinegen etc .. these things dont update automatically"
                                :timestamp "Today at 2:54 AM"
                                }}}))

;; Logo getter 
(defn get_logo [user]
  (let [usr (keyword user)]
    (->> @state :logos usr)))

;; page header
(defn head []
  [:head (include-css "css/discordui.css" "css/skeleton.css" "css/normalize.css")
   [:title "DISCORD-UI"]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
   [:link {:href "https://fonts.googleapis.com/css?family=Lato&display=swap" :rel "stylesheet"}]])

;; Discord Home button
(defn home []
  [:div#home.c1_ele])

;; Server Panel
(defn container_1 []
  [:div.container_1
   (home)
   [:hr.c1_hr ]
   [:div#forge_channel.c1_ele]
   [:div#xtnt_channel.c1_ele.left-border ]
   [:div#plus_c1.c1_ele.c1_op ]
   [:div#search_c1.c1_ele.c1_op]
   [:hr.c1_hr]
   [:div#download_c1.c1_ele.c1_op ]])

;; Active Server
(defn container_2_head []
  [:div.container_2_head
  [:div.c2_head
   [:p (-> @state :server (@active-server) :name)]
   [:div#c2_expand]]])

;;Channel lists and rooms organization function
(defn channel_list [arg]
  (let [current (-> @state :server (@active-server) arg)]
    (map #(identity [:div.c2_rooms
                     [:img#channel_logo {:src (:logo current)} [:ul [:li (val %)]]]
                     [:br]]) (-> current :list))))

;;User Details and options
(defn container_2_footer []
  [:div.container_2_footer
   [:div.user_details
    [:img#c2_userlogo {:src (:user_logo @state)}]
    [:p#c2_username (:user_name @state)]
    [:p#c2_userid (:user_id @state)]]
   [:div#settings.c2_footer_icon]
   [:div#headphones.c2_footer_icon]
   [:div#mic.c2_footer_icon]])

;;Channel list & user details section
(defn container_2 []
  [:div.container_2
   (container_2_head)
   [:div.c2_channels
    [:div.interaction_room
     [:div.c2_channel_heads
      [:div#channel_expand]
      [:p "interaction room"]]
     (channel_list :rooms)]
    [:div.voice_channel
     [:div.c2_channel_heads
      [:div#channel_expand]
      [:p "voice channels"]]
     (channel_list :voice)]]
   (container_2_footer)])

;;Top bar
(defn main_header []
  [:div.main_header
   [:img#mh_hash.mh_channel_name {:src (-> @state :server (@active-server) :rooms :logo)}
     [:p#mh_p.mh_channel_name (-> @state :server (@active-server) :rooms :list (@active-server))]]
   [:div.main_header_icons
    [:div#help.mh_right_icon]
    [:div#mentions.mh_right_icon]
    [:input#searchbar.mh_right_icon {:type "search" :placeholder "Search"}]
    [:div#members.mh_right_icon]
   [:div#pinned.mh_right_icon]
   [:div#notification.mh_right_icon]]])

;;Middle section chat messages
(defn chat_bot []
  [:div.chat_holder
   [:div#github_img]
   [:div#github_head
    [:div#github_tag
     [:p (-> @messages (@active-server) :chat0 :host first)
      [:img {:src (-> @messages (@active-server) :chat0 :host second)}]]]
    [:p#github_date (-> @messages (@active-server) :chat0 :timestamp)]]
   [:div.chat_received
    [:div.chat_received_head
     [:div#chat_userlogo]
     [:p#chat_username (-> @messages (@active-server) :chat0 :sender)]
     [:p#chat_content_head (-> @messages (@active-server) :chat0 :subject)]
     [:div#chat_content [:p (-> @messages (@active-server) :chat0 :content)]]]]])

(defn chat_direct []
  [:div.chat_direct
   [:div#direct_userlogo [:img {:src (-> @messages (@active-server) :chat1 :sender_logo)}]]
   [:div#direct_username [:p {:style (str "color:" (rand-nth (-> @state :color))";")} (-> @messages (@active-server)  :chat1 :sender)]]
   [:div#direct_timestamp [:p (-> @messages (@active-server) :chat1 :timestamp)]]
   [:div#direct_message [:p (-> @messages (@active-server) :chat1 :content)]]])

(defn chat_condition1 [] (if (= (-> @messages (@active-server) :chat0 :host first) "GitHub")  (chat_bot)))
(defn chat_condition2 [] (if (= (-> @messages (@active-server) :chat1 :host first) "direct")  (chat_direct)))

;;Whole middle section with messages typing
(defn container_3 []
  [:div.container_3
   [:div.c3_contents
    (chat_condition1)
    (chat_condition2)]
   [:div.messaging
    [:div#plus_c3]
    [:div#type_message [:input {:type "text" :placeholder "Message #xtnt-micro"}]]
    [:div#smiley_c3.messaging_right_icon]
    [:div#gif_c3.messaging_right_icon]
    [:div#gift_c3.messaging_right_icon]]])

;;Member list organization function
(defn members_list [arg]
  (let [current (-> @state :members arg)]
    [:div.members_list (map #(identity [:div.members_content
                     [:img#member_logo {:src (get_logo %)} [:p {:style (str "color:" (rand-nth (-> @state :color))";")} %]]
                     [:br]]) (-> current))]))

;;Member counting function
(defn member_counter [arg]
  (let [counter (-> @state :members arg)]
    (str (count (-> counter)))))

;;All group member list-Right most container
(defn container_4 []
  [:div.container_4
   [:div
    [:div.members_list_head.product
     [:p.c4_header "Product- " (member_counter :product)]
     (members_list :product)]
    [:div.members_list_head.dev
     [:p.c4_header "Dev- " (member_counter :dev)]
     (members_list :dev)]
    [:div.members_list_head.intern
     [:p.c4_header "intern- " (member_counter :intern)]
    (members_list :intern)]
    [:div.members_list_head.offline
     [:p.c4_header "Offline- " (member_counter :offline)]
    [:div#offline(members_list :offline)]]]])

;;Main function
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
