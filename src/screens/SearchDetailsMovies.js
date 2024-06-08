import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import CustomHeader from "../components/CustomHeader";

const SearchMoviesDetails = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container1}>
       <CustomHeader
        title="Movies Details"
        onBackPress={() => navigation.navigate("Home")}
      />
    <View styles={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: item.Poster }}
      />
      <View style={{paddingHorizontal: 24, }}>
      <Text style={styles.title}>{item.Title}</Text>
     <View>
      <Text style={styles.detailText}>Year: {item.Year}</Text>
      <Text style={styles.detailText}>Type: {item.Type}</Text>
      </View>
 </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container:{
    // flex: 1,
    marginHorizontal: 20,
    justifyContent:'center'

  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 10,
  },
  detailText: {
    fontSize: 12,
    marginBottom: 2,
  },
  image:{
    width:'100%',
    height: 500,
    borderRadius:20,
    marginVertical: 18,
  }
});

export default SearchMoviesDetails;
