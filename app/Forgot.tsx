import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

const ForgotPasswordScreen: React.FC = () => {
	const [email, setEmail] = useState("");

	const handlePasswordReset = () => {
		console.log("Reset password for", email);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Forgot Password</Text>
			<Text style={styles.subtitle}>Enter your email address to reset your password</Text>

			<Input placeholder="Email" value={email} onChangeText={setEmail} />

			<View
				style={{
					paddingVertical: 20,
					width: "100%",
				}}
			>
				<Button title="Reset Password" onPress={handlePasswordReset} style={styles.resetButton} />
			</View>

			<Text style={styles.infoText}>We will send you an email with a link to reset your password.</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#1f41bb",
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 30,
		color: "#333",
		textAlign: "center",
	},
	input: {
		width: "100%",
		marginBottom: 20,
	},
	resetButton: {
		width: "100%",
		backgroundColor: "#1f41bb",
	},
	infoText: {
		fontSize: 14,
		color: "#333",
		textAlign: "center",
	},
});

export default ForgotPasswordScreen;