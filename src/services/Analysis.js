import apiUtils from '../utils/api'

/**
 * @const analyze
 * @desc Triggers API request to trigger analysis of an image at a uri
 * @param {String} uri - URI of the image on cloudinary
 */
const analyze = uri => apiUtils.get('/analyze', { uri })

export default {
  analyze,
}
