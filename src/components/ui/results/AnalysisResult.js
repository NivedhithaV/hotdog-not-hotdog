/**
 * @TODO Show the result of the Image Analysis
 * @desc Pure functional component used to show image analysis results
 */

import React, {Component} from "react";
import {Dimensions, Text, View} from "react-native";

class AnalysisResult extends Component {
	render() {

		const message = this.props.isHotdog ? 'We have a hotdog!' : 'Not hotdog :(';

		return (
			<View
				style={{
					width: Dimensions.get('window').width,
					padding: 20,
					justifyContent: 'center',
					backgroundColor: this.props.isHotdog ? 'green' : 'red'
				}}>
				{/* // Alternate
				{(() => {
					if (this.props.isHotdog) {
						return (
							<Text style={{
								color: 'white',
								fontWeight: 'bold'
							}}>
								We have a Hotdog!
							</Text>
						)
					}
					return (
						<Text style={{
							color: 'white',
							fontWeight: 'bold'
						}}>
							Not Hotdog :(
						</Text>
					)
				})()}*/}
				<Text style={{
					color: 'white',
					fontWeight: 'bold'
				}}>
					{message}
				</Text>
			</View>
		);
	}
}

export default AnalysisResult;