import {ImagePicker} from 'expo'
import apiUtils from '../utils/api'
import applicationConstants from '../config/applicationConstants'

/**
 * @const pick
 * @desc Pick an image from the image library
 * @returns {Promise.<*>}
 */
const pick = async () => {
	try {
		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
			base64: true,
		});

		if (result.cancelled) {
			throw new Error('Image Selection Cancelled')
		}
		return result
	} catch (error) {
		throw new Error('There was an issue picking your image')
	}
};

/**
 * @const upload
 * @desc Uploads the image to Cloudinary
 * @param {Object} image - Image object from ImagePicker
 */
const upload = image =>
	apiUtils.post(
		`${applicationConstants.CLOUDINARY_BASE_URL}/${applicationConstants.CLOUDINARY_CLOUD_NAME}/${applicationConstants.CLOUDINARY_UPLOAD_URL}`,
		{
			file: `data:image/jpg;base64,${image.data}`,
			upload_preset: applicationConstants.CLOUDINARY_UPLOAD_PRESET,
		},
	);

export default{
	pick,
	upload,
}
