import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import PreLandSurvey from './pages/PreLandSurvey.vue'
import PreLandSurveyForms from './pages/PreLandSurveyForms.vue'
import PreLandSurveyDetails from './pages/PreLandSurveyDetails.vue'
import LoginPage from './pages/shared/SignIn.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',redirect:'/home'
        },
        {
            path: '/home', component:HomePage
        },
        {
            path: '/coaches', component:null
        },
        {
            path: '/coaches/:id', component:null, children:[
                {
                    path: 'contact', component:null
                }
            ]
        },
        {
            path: '/prelandsurvey', component:PreLandSurvey
        },
        {
            path: '/prelandsurveyforms', component:PreLandSurveyForms
        },
        {
            path: '/prelandsurveydetails', component:PreLandSurveyDetails
        },
        {
            path: '/request', component:null
        },
        {
            path: '/login', component:LoginPage,
            meta: {
                layout: 'auth'
              }
        },
        {
            path: '/:notFound(.*)', component:null
        }
    ],
});

// router.replace('/login');

export default router;