import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet,  TouchableOpacity, Image} from 'react-native';
import axios from "axios";
// import { useEffect, useState } from 'react';
import { Rating } from "react-native-ratings";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import CustomHeader from '../components/CustomHeader';

const Trendinglist = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
   
  }, []);
  const getMovies = () => {
    const options = {
      method: "GET",
      method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI5MTYyM2NlY2QwOTM5YjYxN2NlZjNiMDQwNjE0YSIsInN1YiI6IjY2NDg4YjNjZTY4YjdjNjhjYjc4YmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8B_H9HrIhwCsS5wqJHyuqNFUHd6BAj4IcrpKsTyb7-w'
  }
    };
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        options
      )
      .then((response) => {
        // console.log("Checker response", response?.data?.results);
        setMovies(response?.data?.results);
        // console.log("Fetched movies:", movies);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate("MoviesDetails", { item: item });
      }}
    >
      <View style={styles.detailsCNT}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
          }}
          style={styles.poster}
        />
        <View>
          <Text style={styles.detailsTXT}>Release date</Text>
          <Text style={styles.apisTXT}>{item?.release_date}</Text>
          <Text style={styles.detailsTXT}>Media Type</Text>
          <Text style={styles.apisTXT}>{item?.media_type}</Text>
          <Text style={styles.detailsTXT}>Movies Rating</Text>
          <Rating
            type="star"
            ratingCount={5}
            startingValue={item?.vote_average / 2}
            imageSize={15}
            showRating
            onFinishRating={this.ratingCompleted}
            ratingBackgroundColor="#000"
            fractions={2}
          />
          <Text style={styles.detailsTXT}>Total reviews</Text>
          <Text style={styles.apisTXT}>{item?.vote_count}</Text>
          <Text style={styles.detailsTXT}>Original language </Text>
          <Text style={styles.apisTXT}>{item?.original_language}</Text>
        </View>
      </View>
      <Text style={styles.title}>{item?.original_title}</Text>
    </TouchableOpacity>
  );

  


  return (
    <View style={styles.container1}>
      <CustomHeader 
      title="Trending Movies"
      onBackPress={() => navigation.navigate("Home")}
      />
      <View style={styles.container}> 
     
      <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    // backgroundColor: '#fff',
  },
  container1:{
    flex: 1,
    
  },
  itemContainer: {
    activeOpacity: 0.2,
    // marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    padding: 5,
    width: '100%',
  },
  detailsCNT: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  poster: {
    width: 140,
    height: 230,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsTXT: {
    fontSize: 14,
    fontWeight: "400",
    alignSelf: "center",
  },
  apisTXT: {
    fontSize: 14,
    fontWeight: "300",
    alignSelf: "center",
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
});

export default Trendinglist;
