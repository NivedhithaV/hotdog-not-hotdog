/**
 * @TODO Implement the UploadButton
 * @desc Pure-functional component used to trigger the upload and analysis
 */

import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

class UploadButton extends Component {

	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={{
					backgroundColor: this.props.backgroundColor,
					paddingHorizontal: 16,
					paddingVertical: 10,
					borderRadius: 6,
					margin: 20
				}}>
				<Text
					style={{
						color: 'white'
					}}>
					{this.props.buttonTitle}
				</Text>
			</TouchableOpacity>
		);
	}
}

export default UploadButton;