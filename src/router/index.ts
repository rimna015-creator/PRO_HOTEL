import { createRouter, createWebHistory } from "vue-router";
import Hotel from "../views/Hotel.vue";
import Home from "../views/Home.vue";
import HotelDetail from "../views/HotelDetail.vue";



const router=createRouter({
    history:createWebHistory(),
    routes: [
        {path:"/",component:Home},
        {path:"/hotel",component:Hotel},
        {path:"/hotel/:id",component:HotelDetail}
    ]
})
export default router