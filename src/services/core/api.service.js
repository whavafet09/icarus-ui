import axios from 'axios'
import { ErrorService } from './error.service'

const ApiService = {

  get (resource) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_API_URL}/${resource}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(ErrorService.transformError(error))
        })
    })
  },

  async post (resource, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`https://localhost:7131/api/${resource}`, payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(ErrorService.transformError(error))
        })
    })
  },

  put (resource, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`${process.env.VUE_APP_API_URL}/${resource}`, payload)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(ErrorService.transformError(error))
        })
    })
  },

  delete (resource) {
    return new Promise((resolve, reject) => {
      axios.delete(`${process.env.VUE_APP_API_URL}/${resource}`)
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(ErrorService.transformError(error))
        })
    })
  }
}

export default ApiService
