import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UploadButton from "./src/components/ui/buttons/UploadButton";
import RemoteImage from "./src/components/ui/images/RemoteImage";
import AnalysisResult from "./src/components/ui/results/AnalysisResult";

import ImageService from "./src/services/Images";


export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.pickImage = async () => {
			try {
				const result = await ImageService.pick();
				const uploadResult = await ImageService.upload(result);
				// console.log(result);
				console.log(uploadResult);
			} catch (error) {
				alert('Error picking image!');
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>React Native App</Text>
				<UploadButton buttonTitle="Select Image"
							  backgroundColor="green"
							  onPress={() => this.pickImage()}/>
				<UploadButton buttonTitle="Button 2"
							  backgroundColor="red"
							  onPress={() => alert('Two')}/>
				<RemoteImage uri="https://www.w3schools.com/css/img_fjords.jpg"/>
				<AnalysisResult isHotdog={true}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});