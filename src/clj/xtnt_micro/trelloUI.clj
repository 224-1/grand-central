(ns xtnt-micro.trelloui
  (:use
   [ring.adapter.jetty :as jetty]
   [hiccup.core :refer :all]
   [hiccup.page :refer :all]
   [compojure.core :refer [defroutes GET]]
   [compojure.route  :refer [resources]]
   [ring.adapter.jetty :as jetty]
   [ring.middleware.reload :refer [wrap-reload]]))

;; state-model
(def state (atom
                {:team {:name "Forge Testers"
                        :players ["az","pk","gs","s9"]}
                 :board "TRLO_Sample1"
                 :board_id "random-hash"
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

(defn head []
  [:head (include-css "css/trelloui.css" "css/skeleton31.css" "css/normalize31.css")
   [:title "TRELLO-UI"]
   [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
   [:link {:href "https://fonts.googleapis.com/css?family=Lato&display=swap" :rel "stylesheet"}]])

(defn header []
  [:div.header
   [:button.home [:img {:src "https://i.imgur.com/XXI76iG.png" :width "20px"}]]
   [:button.boards [:img {:src "https://i.imgur.com/2g4jyx5.png" :width "20px"}] [:label "Boards"]]
   [:input#searchbar {:type "search"}]
   [:h4.headtext [:img#headimage {:src "https://i.imgur.com/2g4jyx5.png" :width "25px"}]  "Trello"]
   [:button#login  "PM"]
   [:button#notification [:img {:src "https://i.imgur.com/tRhMR7B.png" :width "20px"}]]
   [:button#info [:img {:src "https://i.imgur.com/b6rSiOO.png" :width "20px"}]]
   [:button#plus [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "20px"}]]])

;; board dom - remove vr, use border right instead
(defn board_title []
  [:div.board_title
  [:h5#teamhead (:board @state)]
  [:button#star [:img {:src "https://i.imgur.com/XKQEePC.png" :width "16px"}]]
  [:h6.vr "|"]
  [:p#private "Private Team"]
  [:h6.vr "|"]
  [:button.teamvisible [:img {:src "https://i.imgur.com/xKYMuLH.png" :width "16px"}]  [:label "Team Visible"]]
  [:h6.vr "|"]])

(defn players []
  (map #(identity [:button.teamlogo %]) (-> @state :team :players)))

(defn board_opts []
  [:div.board_opts 
  [:button.invite "Invite"]
  [:button.showmenu [:img {:src "https://i.imgur.com/ZtVjj4S.png" :width "16px"}]  [:label "Show Menu"]]])

(defn team []
  [:div.teams {}
   (board_title)
   (players)
   [:button.teamlogo {:id "tls"} "+1
"]
   (board_opts)])

(defn card [ob]
  (let [card-id (keyword ob)]
    [:div.cards [:p.cardcontent (-> @state :cards card-id :msg)]]))


(defn cards [list]
  (let [list-name (keyword list)
        list-obj (-> @state :lists list-name :cards)]
    (->> list-obj
         (map card))))

(defn list [lst]
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
  (map list (-> @state :lists keys)))

(defn board []
  [:div.lists
   (all-lists)


   [:button.addlist [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}]
    [:label "Add another list"]]])

(defn trello_ui [request]
  (html5
   [:body
    (head)
    (header)
    (team)
    (board)]))
