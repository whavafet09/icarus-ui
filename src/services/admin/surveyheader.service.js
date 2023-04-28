// import ApiService from '@/services/core/api.service'
import axios from '../shared/icarus.service'
const HeaderSurveyService = {
  async get (query) {
    return axios().get(`HeaderPreLandSurvey?${query}`)
  },

  async post (payload) {
    return axios().post('HeaderPreLandSurvey', payload)
  },

//   async put (payload) {
//     return ApiService.put(`admin/users/${payload.id}`, payload)
//   },

//   async delete (payload) {
//     return ApiService.delete(`admin/users/${payload.id}`)
//   }
}

export default HeaderSurveyService