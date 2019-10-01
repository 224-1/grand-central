(ns xtnt-micro.trelloui
  (:require [goog.dom :as gdom]
            [reagent.core :as r :refer [atom]]))

(defn hello []
  (js/console.log "as"))

(hello)

;; (def state (atom
;;                 {:team {:name "Forge Testers"
;;                         :players ["az","pk","gs","s9"]}
;;                  :board "TRLO_Sample1"
;;                  :board_id "random-hash"
;;                  :lists {:listhash1 {:creator "pk"
;;                                      :timestamp "0000"
;;                                      :name "Bomb Diffusal"
;;                                      :cards ["cardhash1","cardhash2"]}}
;;                  :cards {:cardhash1 {:list "listhash1"
;;                                      :sender "pk"
;;                                      :timestamp "0000"
;;                                      :msg "Card Message 1"
;;                                      }
;;                          :cardhash2 {:list "listhash1"
;;                                      :sender "azureus"
;;                                      :timestamp "0001"
;;                                      :msg "Card Message 2"}}}))

;; (defn head []
;;   [:head (include-css "css/trelloui.css" "css/skeleton.css" "css/normalize.css")
;;    [:title "TRELLO-UI"]
;;    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
;;    [:link {:href "https://fonts.googleapis.com/css?family=Lato&display=swap" :rel "stylesheet"}]])

;; (defn header []
;;   [:div.header
;;    [:div#home.block [:img {:src "https://i.imgur.com/XXI76iG.png" :width "20px"}]]
;;    [:div#boards.block [:img {:src "https://i.imgur.com/2g4jyx5.png" :width "20px"}] [:span "Boards"]]
;;    [:input#searchbar {:type "search"}]
;;    [:h4.headtext
;;     [:img#headimage {:src "https://i.imgur.com/2g4jyx5.png" :width "25px"}]  "Trello"]
;;    [:div.menu
;;     [:div#plus.block [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "20px"}]]
;;     [:div#info.block [:img {:src "https://i.imgur.com/b6rSiOO.png" :width "20px"}]]
;;     [:div#notification.block [:img {:src "https://i.imgur.com/tRhMR7B.png" :width "20px"}]]
;;     [:div#login.block  "PM"]]])

;; ;; board dom - remove vr, use border right instead
;; (defn board_title []
;;   [:div.board_title
;;    [:h5#teamhead (:board @state)]
;;    [:div#star.block [:img {:src "https://i.imgur.com/XKQEePC.png" :width "16px"}]]
;;    [:div.team_buttons
;;     [:div.block2.right-border.left-border [:p#private "Private Team"]]
;;     [:div.block.teamvisible.right-border [:img {:src "https://i.imgur.com/xKYMuLH.png" :width "16px"}]  [:span "Team Visible"]]]])

;; (defn players []
;;   (map #(identity [:div.teamlogo %]) (-> @state :team :players)))

;; (defn board_opts []
;;   [:div.board_opts
;;   [:div.block.showmenu [:img {:src "https://i.imgur.com/ZtVjj4S.png" :width "16px"}]  [:span "Show Menu"]]])

;; (defn team []
;;   [:div.teams {}
;;    (board_title)
;;    [:div.playerlogo
;;    (players)
;;     [:div.teamlogo {:id "tls"} "+1"]]
;;    [:div.block.invite "Invite"]
;;    (board_opts)])

;; (defn card [ob]
;;   (let [card-id (keyword ob)]
;;     [:div.cards [:p.cardcontent (-> @state :cards card-id :msg)]]))


;; (defn cards [list]
;;   (let [list-name (keyword list)
;;         list-obj (-> @state :lists list-name :cards)]
;;     (->> list-obj
;;          (map card))))

;; (defn list [lst]
;;   (let [list-name (keyword lst)]
;;     [:div.addcard {}
;;      [:div.cardhead
;;       [:label "Team 1"]
;;       [:img#expand {:src "https://i.imgur.com/ZtVjj4S.png" :width "16px"}]]
;;      (cards list-name)
;;      [:div.newcard
;;       [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}]
;;       [:p "Add another card"]]]))

;; (defn all-lists []
;;   (map list (-> @state :lists keys)))

;; (defn board-width []
;;   (->> @state :lists count inc (* 310)))

;; (defn board []
;;   [:div.lists {:style (str "width:" (board-width) "px")}
;;    (all-lists)
;;    [:div.addlist
;;     [:div [:img {:src "https://i.imgur.com/eA0Kqb9.png" :width "13px"}]
;;      [:p "Add another list"]]]])

;; (defn trello_head []
;;   [:head (head)])

;; (defn trello_body []
;;   [:body
;;    (header)
;;    (team)
;;    [:div.list-container (board)]])

;; ;;Reagent
;; (defn build-app []
;;   [:div#container {}
;;    (trello_head)
;;    (trello_body)])

;; (defn get-app-element []
;;   (gdom/getElement "app"))

;; (defn mount [el]
;;   (r/render-component [build-app] el))

;; (defn mount-app-element []
;;   (when-let [el (get-app-element)]
;;     (mount el)))

;; ;; specify reload hook with ^;after-load metadata
;; (defn ^:after-load on-reload []
;;   (mount-app-element))

;; (defn trello_ui [request]
;;   (html5
;;    [:html
;;     (trello_head)
;;     (trello_body)]))

