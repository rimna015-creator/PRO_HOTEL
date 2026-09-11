import { createRouter, createWebHistory } from "vue-router";
import Hotel from "../views/Hotel.vue";
import Home from "../views/Home.vue";
import HotelDetail from "../views/HotelDetail.vue";
import Explore from "../views/Explore.vue";
import BookNow from "../views/BookNow.vue";
import MyBooking from "../views/MyBooking.vue";
import MyAccount from "../views/MyAccount.vue";



const router=createRouter({
    history:createWebHistory(),
    routes: [
        {path:"/",component:Home},
        {path:"/hotel",component:Hotel},
        {path:"/hotel/:id",component:HotelDetail},
        {path:"/hotel/:id/book",component:BookNow},
        {path:"/explore",component:Explore},
        {path:"/my-booking",component:MyBooking},
        {path:"/my-account",component:MyAccount}
    ]
})
export default router