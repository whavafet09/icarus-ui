class AxiosError extends Error {
    constructor (code, message) {
      super(message)
  
      if (this.message !== null) {
        this.message = message
      }
      this.code = code
    }
  }
  
  const ErrorService = {
    transformError (error) {
      let status = null
      let message = null
  
      if (error.response === undefined) {
        status = error.message
        message = error.message
      } else {
        status = error.response.status
  
        if (status === 400) {
          message = error.response.data.message
        } else if (status === 422) {
          message = error.response.data.errors
        } else if (status === 429) {
          message = 'Server is Busy'
        } else if (status === 401) {
          message = 'Your session has expired.'
        } else {
          message = 'Opppss! Something went wrong...'
        }
      }
      return new AxiosError(status, message)
    }
  }
  
  export { AxiosError, ErrorService }
  