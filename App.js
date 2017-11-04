import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UploadButton from "./src/components/ui/buttons/UploadButton";
import RemoteImage from "./src/components/ui/images/RemoteImage";

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>React Native App</Text>
				<UploadButton buttonTitle="Button 1"
							  backgroundColor="blue"
							  onPress={() => alert('One')}/>
				<UploadButton buttonTitle="Button 2"
							  backgroundColor="red"
							  onPress={() => alert('Two')}/>
				<RemoteImage uri="https://www.w3schools.com/css/img_fjords.jpg"/>
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