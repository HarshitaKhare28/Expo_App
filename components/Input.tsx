import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface InputProps {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor="#8C8C8C"
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 10,
		borderWidth: 1,
		borderColor: "#1E49FF",
		borderRadius: 10,
		backgroundColor: "#F2F5FF",
	},
	input: {
		paddingHorizontal: 15,
		paddingVertical: 12,
		fontSize: 16,
		color: "#000",
	},
});

export default Input;
