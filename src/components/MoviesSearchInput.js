import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const MoviesSearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
const navigation=useNavigation()

  useEffect(() => {
    gettingSearch();
  }, []);
  const gettingSearch = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=7def0bd5`)
      .then((response) => {
        // console.log('Search results', response?.data?.Search)
        setSearchResults(response?.data?.Search);
        // console.log('Search results use', searchResults)
      })
      .catch((error) => {
        console.log("Error fetching search Results", error);
      });
  };
  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => {
        navigation.navigate("SearchMoviesDetails", { item: item });
      }}
    >
      <Image
        resizeMode="contain"
        style={{ height: 35, width: 28 }}
        source={{ uri: item.Poster }}
      />
      <View style={styles.MoviesTextContaner}>
        <Text style={styles.MoviesText}>{item.Title}</Text>
        <Text style={styles.moviesType}>{item.Type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#3d5875" />
      <TextInput
        style={styles.input}
        placeholder="Search for a movies..."
        placeholderTextColor="#a8a8a8"
        onChangeText={setSearchQuery}
        value={searchQuery}
        onSubmitEditing={gettingSearch}
      />
      <FlatList
        data={searchResults}
        renderItem={renderSuggestionItem}
        // keyExtractor={(item) => item.id.toString()}
        style={styles.suggestionsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 5,
    padding: 10,
    position: "relative", // Make the container position relative
    zIndex: 1, // Add a higher zIndex to appear on top of other elements
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#3d5875",
    paddingHorizontal: 10,
  },
  suggestionsList: {
    position: "absolute",
    width: "107%", // Adjust the width to match the container
    top: 51, // Adjust the vertical position to avoid overlap with currentWeather container
    backgroundColor: "#fff",
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 5,
    zIndex: 2, // Add a higher zIndex to appear on top of other elements
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  MoviesTextContaner: {
    marginLeft: 10,
  },
  MoviesText: {
    fontSize: 16,
  },
  moviesType: {
    color: "gray",
  },
});

export default MoviesSearchInput;
