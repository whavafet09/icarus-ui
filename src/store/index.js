
import {createStore } from "vuex";
//const userData = JSON.parse(localStorage.getItem("userdata")) 
const store = createStore({
    state() {
        return {
            user:JSON.parse(localStorage.getItem("user-email")) || "",
            role:JSON.parse(localStorage.getItem("user-role")) || "",
            token:""
        }
    },
    mutations:{
        setUser(state,payload){
            state.user = payload.email
            state.role = payload.userRole.userRoleName
        },
        logout(state){
            state.user = ""
            state.role = ""
        }
    },
    getters: {
        loadUserRole(state){
            return state.role
        },
        loadUserEmail(state){
            return state.user
        }
    }

});

export default store;