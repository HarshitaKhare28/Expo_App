import Button from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
	const navigation = useNavigation();
	const handleLogin = () => {
		console.log("Login");
		// @ts-expect-error
		navigation.navigate("Login");
	};

	const handleRegister = () => {
		console.log("Register");
		// @ts-expect-error
		navigation.navigate("Register");
	};

	return (
		<View style={styles.container}>
			<Image source={require("@/assets/images/welcome.png")} style={styles.image} />
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>Discover your Dream Job here</Text>
			</View>
			<View style={styles.description}>
				<Text style={styles.descriptionText}>
					Explore all the existing job roles based on your interest and study major
				</Text>
			</View>
			<View style={styles.flex}>
				<Button title="Login" onPress={handleLogin} />
				<Button title="Register" style={{ backgroundColor: "white", color: "black" }} onPress={handleRegister} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center", // Centers vertically
		alignItems: "center", // Centers horizontally
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		padding: 20,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	image: {
		resizeMode: "contain",
		height: 200,
		width: 200,
	},
	titleText: {
		color: "blue",
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
	},
	description: {
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		marginVertical: 10,
	},
	descriptionText: {
		fontSize: 16,
		color: "#000",
		textAlign: "center",
		lineHeight: 22,
	},
	flex: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
		marginVertical: 20,
		gap: 20,
	},
});
