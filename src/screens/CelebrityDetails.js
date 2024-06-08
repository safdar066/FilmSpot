import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Rating } from "react-native-ratings";
import CircularProgress from 'react-native-circular-progress-indicator';
const CelebrityDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [expanding, setExpanding] = useState(setExpanding);
  const expandingText = () => {
    setExpanding(!expanding);
  };
  return (
    <View style={styles.mainCNT}>
      <CustomHeader
        title="Celebrity Details"
        onBackPress={() => navigation.navigate("Home")}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.name}>{item?.name}</Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item?.profile_path}`,
          }}
          style={styles.profileImage}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Known For Department</Text>
          <Text style={styles.detailsText}>{item?.known_for_department}</Text>
          <Text style={styles.detailsTitle}>Popularity Score</Text>
          <Text style={styles.detailsText}>
            {/* <AnimatedCircularProgress
              size={50}
              width={6}
              fill={item?.popularity}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
              lineCap="round"
              rotation={0}
            >
              {(fill) => (
                <Text style={styles.popularityText}>
                  {Math.round(item?.popularity )}
                </Text>
              )}
            </AnimatedCircularProgress> */}
            <CircularProgress
              value={item?.popularity}
              radius={25}
              // inActiveStrokeOpacity={0.5}
              inActiveStrokeColor="#3d5875"
              activeStrokeWidth={8}
              activeStrokeColor="#00e0ff"
              inActiveStrokeWidth={7}
              progressValueStyle={{ fontWeight: "150", color: "#000" }}
            />
          </Text>

          <Text style={styles.detailsTitle}>Known For</Text>
          {item?.known_for?.map((knownForItem, index) => (
            <View key={index} style={styles.knownForItemContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${knownForItem.poster_path}`,
                }}
                style={styles.knownForImage}
              />
              <View style={styles.knownForDetails}>
                <View style={styles.rowingCNT}>
                  <Text style={styles.knownForDetailsHeading}>Title: </Text>
                  <Text style={styles.detailsText}>{knownForItem.title}</Text>
                </View>
                <View>
                  <Text style={styles.knownForDetailsHeading}>Overview: </Text>
                  <TouchableOpacity 
                  onPress={expandingText}
                  activeOpacity={0.4}>
                    <Text 
                    numberOfLines={expanding ? null : 3}
                    style={styles.detailsText}>
                      {knownForItem.overview}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.rowingCNT}>
                  <Text style={styles.knownForDetailsHeading}>
                    Release Date:
                  </Text>
                  <Text style={styles.detailsText}>
                    {knownForItem.release_date}
                  </Text>
                </View>
                <View style={[styles.rowingCNT]}>
                  <Text style={styles.knownForDetailsHeading}>Popularity:</Text>
                  <Text style={styles.detailsText}>
                    {/* <AnimatedCircularProgress
                      size={40}
                      width={4}
                      fill={knownForItem.popularity}
                      tintColor="#00e0ff"
                      backgroundColor="#3d5875"
                      lineCap="round"
                      rotation={0}
                    >
                      {(fill) => (
                        <Text style={styles.popularityText}>
                          {Math.round(knownForItem.popularity)}
                        </Text>
                      )}
                    </AnimatedCircularProgress> */}
                    {/* {Math.round(knownForItem.popularity)} */}
                    <CircularProgress
              value={knownForItem.popularity}
              radius={20}
              // inActiveStrokeOpacity={0.5}
              inActiveStrokeColor="#3d5875"
              activeStrokeWidth={8}
              activeStrokeColor="#00e0ff"
              inActiveStrokeWidth={7}
              progressValueStyle={{ fontWeight: "130", color: "#000" }}
            />
                  </Text>
                </View>

                <View style={styles.rowingCNT}>
                  <Text style={styles.knownForDetailsHeading}>
                    Vote Average:
                  </Text>
                  <Rating
                    type="star"
                    ratingCount={5}
                    startingValue={knownForItem.vote_average / 2}
                    imageSize={8}
                    showRating
                    onFinishRating={this.ratingCompleted}
                    ratingBackgroundColor="grey"
                    fractions={2}
                  />
                  {/* <Text style={styles.detailsText}>
                    {knownForItem.vote_average}
                  </Text> */}
                </View>

                <View style={styles.rowingCNT}>
                  <Text style={styles.knownForDetailsHeading}>Vote Count:</Text>
                  <Text style={styles.detailsText}>
                    {knownForItem.vote_count}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCNT: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    paddingBottom: 10,
    letterSpacing: 1,
    textAlign: "center",
  },
  profileImage: {
    width: 350,
    height: 350,
    borderRadius: 150,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  detailsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  detailsText: {
    fontSize: 16,
    marginTop: 5,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "justify",
    letterSpacing: 0.3,
  },
  knownForItemContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginBottom: 30,
  },
  knownForImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  knownForDetails: {
    marginLeft: 10,
    flex: 1,
  },
  rowingCNT: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  knownForDetailsHeading: {
    fontSize: 12,
    fontWeight: "500",
    color: "#3d5875",
  },
});

export default CelebrityDetails;
