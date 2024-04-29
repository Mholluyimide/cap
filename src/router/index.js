import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhoWeAreView from '../views/WhoWeAreView.vue'
import WhatWeDoView from '../views/WhatWeDoView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import HistorySection from '../components/About/HistorySection.vue'
import BeliefSection from '../components/About/BeliefSection.vue'
import VisionMissionSection from '../components/About/VisionMissionSection.vue'
import StructureSection from '../components/About/StructureSection.vue'
import FollowUpSection from '../components/blog/FollowUpSection.vue'
import SignUpAdvertSection from '../components/blog/SignUpAdvertSection.vue'
import LoginSection from '../components/blog/LoginSection.vue'
import UploadProduct from '../components/Store/UploadProduct.vue'
import Userbusiness from '../components/Store/Userbusiness.vue'
import getUserInfo from '../components/Store/GetUserInfo.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/about',
            name:'about',
            component: WhoWeAreView
        },
        {
            path:'/services',
            name:'services',
            component: WhatWeDoView
        },
        {
            path:'/contact',
            name:'contact',
            component: ContactUsView
        },
        {
            path:'/history',
            name:'history',
            component: HistorySection
        },
        {
            path:'/belief',
            name:'belief',
            component: BeliefSection
        },
        {
            path:'/vision&mission',
            name:'vision&mission',
            component: VisionMissionSection
        },
        {
            path:'/structure',
            name:'structure',
            component: StructureSection
        },
        {
            path:'/followup',
            name:'followup',
            component: FollowUpSection
        },
        {
            path:'/signup',
            name:'signup',
            component: SignUpAdvertSection
        },
        {
            path:'/login',
            name:'login',
            component: LoginSection
        },
        {
            path:'/user/product-management',
            name:'uploadproduct',
            component: UploadProduct
        },
        {
            path:'/user/business_information',
            name:'userbusiness',
            component: Userbusiness
        },
        {
            path:'/user/product_service',
            name:'getuserinfo',
            component: getUserInfo
        }



    ]
})

export default router