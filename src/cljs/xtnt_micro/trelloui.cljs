(ns xtnt-micro.trelloui
  (:require [reagent.core :as reagent :refer [atom]]))

;; state-model
(def state (atom
            {:team {:name "Forge Testers"
                    :players ["az","pk","gs","s9"]}
             :board "TRLO-Sample1"
             :board-id "random-hash"
             :lists {:listhash1 {:creator "pk"
                                 :timestamp "0000"
                                 :name "Bomb Diffusal"
                                 :cards ["cardhash1","cardhash2"]}}
             :cards {:cardhash1 {:list "listhash1"
                                 :sender "pk"
                                 :timestamp "0000"
                                 :msg "Card Message 1"
                                 }
                     :cardhash2 {:list "listhash1"
                                 :sender "azureus"
                                 :timestamp "0001"
                                 :msg "Card Message 2"}}}))

(defn header []
  [:div.header
   [:div#home.block [:img {:src "https://i.imgur.com/XXI76iG.png" :width "20px"}]]
   [:div#boards.block [:img {:src "https://i.imgur.com/2g4jyx5.png" :width "20px"}] [:span "Boards"]]
   [:input#searchbar {:type "search"}]
   [:h4.headtext
    [:img#headimage {:src "https://i.imgur.com/2g4jyx5.png" :width "25px"}]  "Trello"]
   [:div.menu
    [:div#plus.block [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "20px"}]]
    [:div#info.block [:img {:src "https://i.imgur.com/b6rSiOO.png" :width "20px"}]]
    [:div#notification.block [:img {:src "https://i.imgur.com/tRhMR7B.png" :width "20px"}]]
    [:div#login.block  "PM"]]])

(defn board-title []
  [:div.board-title
   [:h5#teamhead (:board @state)]
   [:div#star.block [:img {:src "https://i.imgur.com/XKQEePC.png" :width "16px"}]]
   [:div.team-buttons
    [:div.block2.right-border.left-border [:p#private "Private Team"]]
    [:div.block.teamvisible.right-border [:img {:src "https://i.imgur.com/xKYMuLH.png" :width "16px"}]  [:span "Team Visible"]]]])

(defn players []
  (map #(identity [:div.teamlogo %]) (-> @state :team :players)))

(defn board-opts []
  [:div.board-opts
   [:div.block.showmenu [:img {:src "https://i.imgur.com/ZtVjj4S.png" :width "16px"}]  [:span "Show Menu"]]])


(defn team []
  [:div.teams {}
   (board-title)
   [:div.playerlogo
    (players)
    [:div.teamlogo {:id "tls"} "+1"]]
   [:div.block.invite "Invite"]
   (board-opts)])

(defn card [ob]
  (let [card-id (keyword ob)]
    [:div.cards [:p.cardcontent (-> @state :cards card-id :msg)]]))

(defn cards [list]
  (let [list-name (keyword list)
        list-obj (-> @state :lists list-name :cards)]
    (->> list-obj
         (map card))))

(defn list-trello [lst]
  (let [list-name (keyword lst)]
    [:div.addcard {}
     [:div.cardhead
      [:label "Team 1"]
      [:img#expand {:src "https://i.imgur.com/ZtVjj4S.png" :width "16px"}]]
     (cards list-name)
     [:div.newcard
      [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}]
      [:p "Add another card"]]]))

(defn all-lists []
  (map list-trello (-> @state :lists keys)))

(defn board-width []
  (->> @state :lists count inc (* 310)))

(defn board []
  [:div.lists {:style {:width (str (board-width) "px")}}
   (all-lists)
   [:div.addlist
    [:div [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}]
     [:p "Add another list"]]]])

(defn trello-body []
  [:div
   (header)
   (team)
   [:div.list-container (board)]])

(defn app-container []
  (trello-body)
  )

(reagent/render-component
 [app-container]
 (. js/document (getElementById "app")))
