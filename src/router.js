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
            path: '/',redirect:'/home',
            
        },
        {
            path: '/home', component:HomePage,
            name:'home'
        },
        {
            path: '/coaches', component:null
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
            path: '/login', 
            component:LoginPage,
            name: 'login',
            meta: {
                layout: 'auth'
              }
        },
        {
            path: '/:notFound(.*)', component:null
        }
    ],
});

router.beforeEach((to, from, next) => {
    var token = localStorage.getItem("user-token")
  
    if (to.name == 'login') {
      if (token) {
        next({name: 'home'})
      }
    } else {
      if (token == null ) {
        next({name: 'login'})
      }
    }
  
    next()
  })

export default router;