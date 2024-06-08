import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CustomHeader = ({onBackPress, title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.backButton} onPress={onBackPress}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3d5875',
        paddingHorizontal: 15,
        paddingTop: 12, // Adjust according to your status bar height
        paddingBottom: 12,
      },
      backButton: {
        marginRight: 10,
      },
      title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      },
      placeholder: {
        width: 24, // Adjust as per your design
      },
});

export default CustomHeader;
