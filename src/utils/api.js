import Axios from 'axios'
import applicationConstants from '../config/applicationConstants'

// Axios singleton
const axiosInstance = Axios.create({
  baseURL: applicationConstants.API_DOMAIN,
  timeout: 10000,
})

/**
 * @const getHeaders
 * @desc returns headers object
 * @returns {{headers: {Content-Type: string, Accept: string}}}
 */
const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  return { headers }
}

/**
 * @const handleError
 * @desc Generic API error handler
 * @param error
 */
const handleError = error => {
  console.log(JSON.stringify(error))
  throw new Error('Something went wrong')
}

/**
 * @const get
 * @desc Trigger and HTTP GET request
 * @param {String} path - Endpoint path
 * @param ${Object} [params] - Query params
 */
const get = (path, params = {}) =>
  axiosInstance
    .get(path, Object.assign({}, getHeaders(), { params }))
    .then(response => response.data)
    .catch(handleError)

/**
 * @const post
 * @desc Trigger and HTTP POST request
 * @param {String} path - Endpoint path
 * @param ${Object} [data] - POST body
 */
const post = (path, data) =>
  axiosInstance
    .post(path, data, getHeaders())
    .then(response => response.data)
    .catch(handleError)

export default {
  get,
  post,
}
