/**
 * @TODO Implement the Image viewer component showing an image from Cloudinary
 * @desc Pure functional component used to show image
 */


import React, {Component} from "react";
import {Dimensions, Image} from "react-native";

class RemoteImage extends Component {
	render() {
		return (
			<Image
				style={{
					height: 100,
					width: Dimensions.get('window').width,
					resizeMode: 'contain'
				}}
				source={{uri: this.props.uri}}
			/>
		);
	}
}

export default RemoteImage;