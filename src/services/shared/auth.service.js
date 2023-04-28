// import ApiService from '@/services/core/api.service'
import axios from '../shared/icarus.service'
const AuthService = {
  async SignIn (payload) {
    return axios().post('Auth', payload)
  },

//   async FetchUser () {
//     return ApiService.get('auth/me')
//   },

//   async ChangePassword (payload) {
//     return ApiService.post('auth/password', payload)
//   },

//   async Logout () {
//     ApiService.post('auth/logout')
//   }
}

export default AuthService