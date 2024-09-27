// IconButton.tsx
import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

interface IconButtonProps {
	icon: any; // Source for the image icon
	onPress: () => void; // Function to execute on button press
	title?: string; // Optional text label for the button
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onPress, title }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Image source={icon} style={styles.icon} />
			{title && <Text style={styles.title}>{title}</Text>}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		margin: 10,
		backgroundColor: "#f5f5f5",
		borderRadius: 8,
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	title: {
		fontSize: 16,
		color: "#000",
	},
});

export default IconButton;
