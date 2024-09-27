import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
	title: string;
	onPress: () => void;
	style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={[styles.buttonText, style]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#1E49FF",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 3,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default Button;
