(ns xtnt-micro.discordui
  (:require [reagent.core :as reagent :refer [atom]]
            [goog.dom :as gdom]))


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
(defn get-logo [user]
  (let [usr (keyword user)]
    (->> @state :logos usr)))

;; Discord Home button
(defn home []
  [:div#home.c1_ele])

;; Server Panel
(defn container-1 []
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
(defn container-2-head []
  [:div.container_2_head
  [:div.c2_head
   [:p (-> @state :server (@active-server) :name)]
   [:div#c2_expand]]])

;;Channel lists and rooms organization function
(defn channel-list [arg]
  (let [current (-> @state :server (@active-server) arg)]
    (map #(identity [:div.c2_rooms
                     [:img#channel_logo {:src (:logo current)} [:ul [:li (val %)]]]
                     [:br]]) (-> current :list))))

;;User Details and options
(defn container-2-footer []
  [:div.container_2_footer
   [:div.user_details
    [:img#c2_userlogo {:src (:user_logo @state)}]
    [:p#c2_username (:user_name @state)]
    [:p#c2_userid (:user_id @state)]]
   [:div#settings.c2_footer_icon]
   [:div#headphones.c2_footer_icon]
   [:div#mic.c2_footer_icon]])

;;Channel list & user details section
(defn container-2 []
  [:div.container_2
   (container-2-head)
   [:div.c2_channels
    [:div.interaction_room
     [:div.c2_channel_heads
      [:div#channel_expand]
      [:p "interaction room"]]
     (channel-list :rooms)]
    [:div.voice_channel
     [:div.c2_channel_heads
      [:div#channel_expand]
      [:p "voice channels"]]
     (channel-list :voice)]]
   (container-2-footer)])


(defn build-app []
  [:div#container 
   (container-1)
   (container-1)
   ])

;;(defn get-app-element []
;;  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [build-app] el))



;;(reagent/render-component
;; [build-app]
;; (. js/document (getElementById "app")))
