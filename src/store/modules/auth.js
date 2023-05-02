import * as types from '../mutation-types'
import axios from "axios";
import { AxiosError, SharedAuthService } from '@/services'



const state = {
  token: localStorage.getItem("user-token") || "",
  status: localStorage.getItem("status") || "",
  hasLoadedOnce: false,
  email: localStorage.getItem("user-email") || ""
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  email: state => state.email,
  status: state => state.status
};

const actions = {
  [types.AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(types.AUTH_REQUEST);
       SharedAuthService.SignIn(user).then(result => {
            
            localStorage.setItem('user-token', result.data.token);
            localStorage.setItem('user-email', result.data.email);
            localStorage.setItem('status', result.data.status);
          //  console.log(result)
            commit(types.AUTH_SUCCESS, result);
            // dispatch(types.USER_REQUEST);
            resolve(result);
            console.log('done callbackend')
       }).catch(err => {
          commit(types.AUTH_ERROR, err);
          localStorage.removeItem("user-token");
          reject(err);
        });
    });
 
  },
  [types.AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(types.AUTH_LOGOUT);
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-email");
      localStorage.removeItem("status");
      resolve();
      console.log('done callbackend')
    });
  }
};

const mutations = {
  [types.AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [types.AUTH_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [types.AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [types.AUTH_LOGOUT]: state => {
    state.token = "";
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

















































// export const state = {
//   user: null,
//   token: null
// }

// export const getters = {
//   user: state => state.user,
//   token: state => state.token,
//   check: state => state.user !== null
// }

// export const mutations = {
//   [types.SAVE_TOKEN] (state, token) {
//     state.token = token
//   },

//   [types.FETCH_USER_SUCCESS] (state, user) {
//     state.user = user
//   },

//   [types.FETCH_USER_FAILURE] (state) {
//     state.user = null
//   },

//   [types.LOGOUT] (state) {
//     state.user = null
//     state.token = null
//   }
// }

// export const actions = {
//   saveToken ({ commit }, token) {
//     commit(types.SAVE_TOKEN, token)
//   },

//   fetchUserSuccess ({ commit }, user) {
//     commit(types.FETCH_USER_SUCCESS, user)
//   },

//   fetchUserFailure ({ commit }) {
//     commit(types.FETCH_USER_FAILURE)
//   },

//   logout ({ commit }) {
//     commit(types.LOGOUT)
//   }
// }
