import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Modal,
  StatusBar,
} from "react-native";
import Swiper from "react-native-swiper";
import axios from "axios";
import { Rating } from "react-native-ratings";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import MoviesSearchInput from "../components/MoviesSearchInput";
import CircularProgress from 'react-native-circular-progress-indicator';
const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [celebrities, setCelebrities] = useState([]);

  const handleCategoryPress = (item) => {
    // navigation.navigate('SearchMoviesDetails')
    if (item.name === "Popular Now") {
      navigation.navigate("TrendingList");
    }

    console.log("Category pressed:", item.name);
  };

  const dummyCategoriesData = [
    { id: 1, name: "Popular Now", icon: "🔥" },
    { id: 2, name: "Top Rated", icon: "⭐" },
    { id: 3, name: "Upcoming Releases", icon: "📅" },
  ];

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
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
        <View style={{ alignItems: "center"}}>
          <Text style={styles.detailsTXT}>Release date</Text>
          <Text style={styles.apisTXT}>{item?.release_date}</Text>
          <Text style={styles.detailsTXT}>Movies Rating</Text>
          <Rating
            style={{marginHorizontal: 5}}
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

  const renderTvShowItem = ({ item }) => (
    // console.log("item tv show:", item),
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

        <View style={{ alignItems: "center"}}>
          <Text style={styles.detailsTXT}>Release date</Text>
          <Text style={styles.apisTXT}>{item?.first_air_date}</Text>
          <Text style={styles.detailsTXT}>Tv Show Rating</Text>
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
      <Text style={styles.title}>{item?.original_name}</Text>
    </TouchableOpacity>
  );

  const renderCelebrityItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate("CelebrityDetails", { item: item });
      }}
    >
      <View style={styles.detailsCNT}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item?.profile_path}`,
          }}
          style={styles.poster}
        />

        <View style={{ alignItems: "center", width: 170 }}>
          <Text style={styles.detailsTXT}>Know For department</Text>
          <Text style={styles.apisTXT}>{item?.known_for_department}</Text>
          <Text style={styles.detailsTXT}>Popularity Score</Text>
          <CircularProgress
              value={item?.popularity}
              radius={25}
              // inActiveStrokeOpacity={0.5}
              inActiveStrokeColor="#3d5875"
              activeStrokeWidth={8}
              activeStrokeColor="#00e0ff"
              inActiveStrokeWidth={7}
              progressValueStyle={{ fontWeight: "100", color: "#000" }}
            />

          <Text style={styles.detailsTXT}>Known For</Text>
          {item?.known_for?.map((knownForItem, index) => (
            <Text ellipsizeMode="head" key={index} style={styles.apisTXT}>
              {knownForItem.title}
            </Text>
          ))}
        </View>
      </View>
      <Text style={styles.title}>{item?.name}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    getMovies();
    getTVShows();
    getCelebrities();
  }, []);
  // Function to fetch Movies data from TMDB APIs

  const getMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI5MTYyM2NlY2QwOTM5YjYxN2NlZjNiMDQwNjE0YSIsInN1YiI6IjY2NDg4YjNjZTY4YjdjNjhjYjc4YmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8B_H9HrIhwCsS5wqJHyuqNFUHd6BAj4IcrpKsTyb7-w",
      },
    };
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
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

  // Function to fetch TV show data from TMDB APIs
  const getTVShows = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI5MTYyM2NlY2QwOTM5YjYxN2NlZjNiMDQwNjE0YSIsInN1YiI6IjY2NDg4YjNjZTY4YjdjNjhjYjc4YmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8B_H9HrIhwCsS5wqJHyuqNFUHd6BAj4IcrpKsTyb7-w",
      },
    };
    axios
      .get("https://api.themoviedb.org/3/discover/tv", options)
      .then((response) => {
        // console.log("TV SHow response", response?.data?.results);
        setTvShows(response?.data?.results);
        // console.log("Fetched TVSHOWS", tvShows);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  // Function to get Celebrities list
  const getCelebrities = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI5MTYyM2NlY2QwOTM5YjYxN2NlZjNiMDQwNjE0YSIsInN1YiI6IjY2NDg4YjNjZTY4YjdjNjhjYjc4YmI5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8B_H9HrIhwCsS5wqJHyuqNFUHd6BAj4IcrpKsTyb7-w",
      },
    };
    axios
      .get("https://api.themoviedb.org/3/trending/person/day", options)
      .then((response) => {
        // console.log("Fetch Celebrity: ", response?.data?.results?.name);
        setCelebrities(response?.data?.results);
        console.log("celebrityList:", celebrities);
      })
      .catch((error) => {
        console.log("Errors fetching Celebrity: ", error);
      });
  };
  // Function to get search results

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#3d5875" />

      <View style={styles.developContact}>
        <Text style={styles.contact}>Contact with developer</Text>
        <Text style={styles.profileLNK}>linkedin.com/in/safdar066/</Text>
      </View>
      <Text style={[styles.sectionTitle, styles.redText]}>
        Check-out Latest Movies
      </Text>
      <View style={styles.carouselContainer}>
        <Swiper activeDotColor="#3d5875" style={styles.wrapper} autoplay={true}>
          <Image
            source={require("./../assets/images/swip1.jpg")}
            style={styles.banner}
          />
          <Image
            source={require("./../assets/images/swip2.jpg")}
            style={styles.banner}
          />
          <Image
            source={require("./../assets/images/swip3.jpg")}
            style={styles.banner}
          />
          <Image
            source={require("./../assets/images/swip4.jpg")}
            style={styles.banner}
          />
          <Image
            source={require("./../assets/images/swip5.jpg")}
            style={styles.banner}
          />
          <Image
            source={require("./../assets/images/swip6.jpg")}
            style={styles.banner}
          />
        </Swiper>
      </View>

      <MoviesSearchInput />

      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyCategoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      {/* Implement personalized recommendations section here */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Movies</Text>
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>TV Shows</Text>
        <FlatList
          data={tvShows}
          renderItem={renderTvShowItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Celebrities</Text>
        <FlatList
          data={celebrities}
          renderItem={renderCelebrityItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingHorizontal: 18,
  },
  carouselContainer: {
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elivation: 1,
  },
  wrapper: {
    borderRadius: 8,
  },
  banner: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    borderRadius: 8,
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryItem: {
    marginRight: 10,
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIcon: {
    fontSize: 20,
    marginRight: 5,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  redText: {
    color: "#3d5875",
    marginTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "#333",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  developContact: {
    alignItems: "center",
    paddingTop: 10,
  },
  contact: {
    color: "#3d5875",
    fontWeight: "200",
    fontSize: 11,
  },
  profileLNK: {
    color: "#3d5875",
    fontWeight: "300",
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  itemContainer: {
    activeOpacity: 0.2,
    marginRight: 10,
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
    width: 300,
  },
  detailsCNT: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  poster: {
    width: 120,
    height: 180,
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
    alignSelf: 'auto',
   paddingHorizontal: '5%',
   flex:1,
   color:'#3d5875',
   flexWrap:'wrap',
   textAlign:'justify'
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  profilePic: {
    width: 120,
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
