import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import PreLandSurvey from './pages/PreLandSurvey.vue'
import PreLandSurveyForms from './pages/PreLandSurveyForms.vue'
import PreLandSurveyDetails from './pages/PreLandSurveyDetails.vue'
import ProjectFolder from './pages/ProjectFolder.vue'
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
            path: '/prelandsurvey', 
            component:PreLandSurvey,
            name: 'prelandsurvey',
            props: true
        },
        {
            path: '/prelandsurveyforms', 
            component:PreLandSurveyForms,
            name: 'prelandsurveyforms',
            props: true
        },
        {
            path: '/prelandsurveyforms/:prelandcardId', 
            component:PreLandSurveyForms,
            name: 'prelandsurveyformsCard',
            props: true
        },
        {
            path: '/prelandsurveydetails', 
            component:PreLandSurveyDetails,
            name:'prelandsurveydetails'
        },
        {
            path: '/prelandsurveydetails/:prelandcardId', 
            component:PreLandSurveyDetails,
            name:'prelandsurveydetailsCard',
            props:true
        },
        {
            path: '/projects', 
            component:ProjectFolder,
            name:'projectCreation'
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