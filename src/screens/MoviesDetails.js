import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import { Rating } from "react-native-ratings";
import Icon from "react-native-vector-icons/MaterialIcons";
const MoviesDetails = ({ route, navigation }) => {
  const item = route.params;

  const [expandable, setExpandable] = useState(false);
  const [addtoFavoite, setAddtoFavroite] = useState(false);
  const [addtoWatchList, setAddtoWatchlist] = useState(false);
  const togleOption = () => {
    setExpandable(!expandable);
  };

  const handleAddToFavorite = () => {
    setAddtoFavroite(!addtoFavoite);
    console.log("Added to Favorite");
  };

  const handleAddToWatchlist = () => {
    setAddtoWatchlist(!addtoWatchList);
    console.log("Added to Watchlist");
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        title="Details"
        onBackPress={() => navigation.navigate("Home")}
      />

      <ScrollView style={styles.container}>
        <Text style={styles.titleSTYL}>{item.item?.name}{item.item?.original_title}</Text>
        <ImageBackground
          resizeMode="stretch"
          style={styles.posterIMG}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.item?.poster_path}`,
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleAddToFavorite}
            >
              <Icon
                name={addtoFavoite ? "favorite" : "favorite-border"}
                size={25}
                color={addtoFavoite ? "red" : "white"}
              />
              <Text style={styles.iconText}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleAddToWatchlist}
            >
              <Icon
                name={addtoWatchList ? "bookmark" : "bookmark-border"}
                size={25}
                color={addtoWatchList ? "red" : "white"}
              />
              <Text style={styles.iconText}>Watchlist</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text style={styles.overviewHeading}>Overview: </Text>
        <TouchableOpacity onPress={togleOption} activeOpacity={0.5}>
          <Text numberOfLines={expandable ? null : 3} style={styles.overDesc}>
            {item.item?.overview}
          </Text>
        </TouchableOpacity>
        <View style={styles.ratingCNT}>
          <View style={styles.ratingCNT1}>
            <Text style={styles.overviewHeading}>Release Date</Text>
            <Text>{item.item?.release_date}</Text>
          </View>
          <View style={styles.ratingCNT1}>
            <Rating
              type="star"
              ratingCount={5}
              startingValue={item.item?.vote_average / 2}
              imageSize={15}
              showRating
              onFinishRating={this.ratingCompleted}
              ratingBackgroundColor="grey"
              fractions={2}
            />
          </View>
          <View style={styles.ratingCNT1}>
            <Text style={styles.overviewHeading}>Total Reviews</Text>
            <Text>{item.item?.vote_count}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  container: {
    // flex: 1,
    paddingHorizontal: 18,
  },
  titleSTYL: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 10,
    letterSpacing: 1,
    textAlign: "auto",
    backgroundColor: "#FFF",
    borderRadius: 4,
    marginVertical: 8,
    paddingHorizontal: 4,
  },
  posterIMG: {
    width: "100%",
    height: 500,
    borderRadius: 2,
  },
  overviewHeading: {
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: 10,
  },
  overDesc: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "justify",
    letterSpacing: 0.4,
  },
  ratingCNT: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 4,
  },
  ratingCNT1: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 8,
  },
  iconButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#FFF",
  },
});

export default MoviesDetails;
