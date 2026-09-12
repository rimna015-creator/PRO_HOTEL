import { createRouter, createWebHistory } from "vue-router";
import Hotel from "../views/Hotel.vue";
import Home from "../views/Home.vue";
import HotelDetail from "../views/HotelDetail.vue";
import Explore from "../views/Explore.vue";
import BookNow from "../views/BookNow.vue";
import MyBooking from "../views/MyBooking.vue";
import MyAccount from "../views/MyAccount.vue";
import Promotion from "../views/Promotion.vue";


const router=createRouter({
    history:createWebHistory(),
    routes: [
        {path:"/",component:Home},
        {path:"/hotel",component:Hotel},
        {path:"/hotel/:id",component:HotelDetail},
        {path:"/hotel/:id/book",component:BookNow},
        {path:"/explore",component:Explore},
        {path:"/promotion",component:Promotion},
        {path:"/my-booking",component:MyBooking},
        {path:"/my-account",component:MyAccount}
    ],
    scrollBehavior(_to, _from, savedPosition) {
    // When using browser Back/Forward button
    if (savedPosition) {
      return savedPosition;
    }

    // When navigating to a new page
    return {
      top: 0,
    };
  },
})
export default router