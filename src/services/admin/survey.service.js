import ApiService from '@/services/core/api.service'

const SurveyService = {
  async get (payload) {
    return ApiService.get(`PreLandSurvey/${payload.Id}`)
  },

  async post (payload) {
    return ApiService.post('PreLandSurvey', payload)
  },

//   async put (payload) {
//     return ApiService.put(`admin/users/${payload.id}`, payload)
//   },

//   async delete (payload) {
//     return ApiService.delete(`admin/users/${payload.id}`)
//   }
}

export default SurveyService