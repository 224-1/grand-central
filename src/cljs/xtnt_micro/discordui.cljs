(ns xtnt-micro.discordui
  (:require [reagent.core :as reagent :refer [atom]]
            [goog.dom :as gdom]))


(def active-server (atom :0))
(def state (atom {:user-name "Parikshith"
                      :user-id "#6228"
                      :user-logo "https://i.imgur.com/6SRX0td.png"
                      :server {:0 {:name "XTNT"
                                   :rooms {:name "Interaction room"
                                           :list {:0 "xtnt-micro"
                                                  :1 "horizon"
                                                  :2 "horizon-system"
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
                                :sender-logo "https://i.imgur.com/6SRX0td.png"
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
                                :sender-logo "https://i.imgur.com/zn6kLLT.png"
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
  [:div#home.c1-ele])

;; Server Panel
(defn container-1 []
  [:div.container-1
   (home)
   [:hr.c1-hr ]
   [:div#forge-channel.c1-ele]
   [:div#xtnt-channel.c1-ele.left-border ]
   [:div#plus-c1.c1-ele.c1-op ]
   [:div#search-c1.c1-ele.c1-op]
   [:hr.c1-hr]
   [:div#download-c1.c1-ele.c1-op ]])

;; Active Server
(defn container-2-head []
  [:div.container-2-head
  [:div.c2-head
   [:p (-> @state :server (@active-server) :name)]
   [:div#c2-expand]]])

;;Channel lists and rooms organization function
(defn channel-list [arg]
  (let [current (-> @state :server (@active-server) arg)]
    (map #(identity [:div.c2-rooms
                     [:div#channel-logo [:img {:src (:logo current)}]
                                         [:ul [:li (val %)]]
                     [:br]]]) (-> current :list))))

;;User Details and options
(defn container-2-footer []
  [:div.container-2-footer
   [:div.user-details
    [:div#c2-userlogo [:img {:src (:user-logo @state)}]]
    [:p#c2-username (:user-name @state)]
    [:p#c2-userid (:user-id @state)]]
   [:div#settings.c2-footer-icon]
   [:div#headphones.c2-footer-icon]
   [:div#mic.c2-footer-icon]])

;;Channel list & user details section
(defn container-2 []
  [:div.container-2
   (container-2-head)
   [:div.c2-channels
    [:div.interaction-room
     [:div.c2-channel-heads
      [:div#channel-expand]
      [:p "interaction room"]]
     (channel-list :rooms)]
    [:div.voice-channel
     [:div.c2-channel-heads
      [:div#channel-expand]
      [:p "voice channels"]]
     (channel-list :voice)]]
   (container-2-footer)])

;;Top bar
(defn main-header []
  [:div.main-header
   [:div#mh-hash.mh-channel-name [:img {:src (-> @state :server (@active-server) :rooms :logo)}]
    [:div#mh-p.mh-channel-name [:p (-> @state :server (@active-server) :rooms :list (@active-server))]]]
   [:div.main-header-icons
    [:div#help.mh-right-icon]
    [:div#mentions.mh-right-icon]
    [:input#searchbar.mh-right-icon {:type "search" :placeholder "Search"}]
    [:div#members.mh-right-icon]
    [:div#pinned.mh-right-icon]
    [:div#notification.mh-right-icon]]])

;;Middle section chat messages
(defn chat-bot []
  [:div.chat-holder
   [:div#github-img]
   [:div#github-head
    [:div#github-tag
     [:p (-> @messages (@active-server) :chat0 :host first)
      [:div [:img {:src (-> @messages (@active-server) :chat0 :host second)}]]]]
    [:p#github-date (-> @messages (@active-server) :chat0 :timestamp)]]
   [:div.chat-received
    [:div.chat-received-head
     [:div#chat-userlogo]
     [:p#chat-username (-> @messages (@active-server) :chat0 :sender)]
     [:p#chat-content-head (-> @messages (@active-server) :chat0 :subject)]
     [:div#chat-content [:p (-> @messages (@active-server) :chat0 :content)]]]]])

(defn chat-direct []
  [:div.chat-direct
   [:div#direct-userlogo [:img {:src (-> @messages (@active-server) :chat1 :sender-logo)}]]
   [:div#direct-username [:p {:style {:color (rand-nth (-> @state :color))}}(-> @messages (@active-server)  :chat1 :sender)]]
   [:div#direct-timestamp [:p (-> @messages (@active-server) :chat1 :timestamp)]]
   [:div#direct-message [:p (-> @messages (@active-server) :chat1 :content)]]])

(defn chat-condition1 [] (if (= (-> @messages (@active-server) :chat0 :host first) "GitHub")  (chat-bot)))
(defn chat-condition2 [] (if (= (-> @messages (@active-server) :chat1 :host first) "direct")  (chat-direct)))

;;Whole middle section with messages typing
(defn container-3 []
  [:div.container-3
   [:div.c3-contents
    (chat-condition1)
    (chat-condition2)]
   [:div.messaging
    [:div#plus-c3]
    [:div#type-message [:input {:type "text" :placeholder "Message #xtnt-micro"}]]
    [:div#smiley-c3.messaging-right-icon]
    [:div#gif-c3.messaging-right-icon]
    [:div#gift-c3.messaging-right-icon]]])

;;Member list organization function
(defn members-list [arg]
  (let [current (-> @state :members arg)]
    [:div.members-list (map #(identity [:div.members-content
                                        [:div#member-logo [:img {:src (get-logo %)}] [:p {:style {:color (rand-nth (-> @state :color))}} %]]
                                        [:br]]) (-> current))]))

;;Member counting function
(defn member-counter [arg]
  (let [counter (-> @state :members arg)]
    (str (count (-> counter)))))

;;All group member list-Right most container
(defn container-4 []
  [:div.container-4
   [:div
    [:div.members-list-head.product
     [:p.c4-header "Product- " (member-counter :product)]
     (members-list :product)]
    [:div.members-list-head.dev
     [:p.c4-header "Dev- " (member-counter :dev)]
     (members-list :dev)]
    [:div.members-list-head.intern
     [:p.c4-header "intern- " (member-counter :intern)]
     (members-list :intern)]
    [:div.members-list-head.offline
     [:p.c4-header "Offline- " (member-counter :offline)]
     [:div#offline(members-list :offline)]]]])

(defn discord-ui []
  [:div
   (container-1)
  (container-2)
 (main-header)
   (container-3)
  (container-4)
   ])

;;(defn get-app-element []
;;  (gdom/getElement "app"))

;;(defn mount [el]
;;  (reagent/render-component [build-app] el))

(reagent/render-component
[discord-ui]
 (. js/document (getElementById "app")))
