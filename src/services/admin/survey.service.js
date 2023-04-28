// import ApiService from '@/services/core/api.service'
import axios from '../shared/icarus.service'
const SurveyService = {
  async get (payload) {
    return axios().get(`PreLandSurvey/${payload.Id}`)
  },

  async post (payload) {
    return axios().post('PreLandSurvey', payload)
  },

//   async put (payload) {
//     return ApiService.put(`admin/users/${payload.id}`, payload)
//   },

//   async delete (payload) {
//     return ApiService.delete(`admin/users/${payload.id}`)
//   }
}

export default SurveyService