import ApiService from '@/services/core/api.service'

const HeaderSurveyService = {
  async get (query) {
    return ApiService.get(`HeaderPreLandSurvey?${query}`)
  },

  async post (payload) {
    return ApiService.post('HeaderPreLandSurvey', payload)
  },

//   async put (payload) {
//     return ApiService.put(`admin/users/${payload.id}`, payload)
//   },

//   async delete (payload) {
//     return ApiService.delete(`admin/users/${payload.id}`)
//   }
}

export default HeaderSurveyService