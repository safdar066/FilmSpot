import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';

const IntroScreen = ({ navigation }) => {
 

  const handleDone = () => {
    navigation.replace('BottomTabs'); // Navigate to BottomTabs screen
  };

  return (
    
    <Swiper
      loop={false}
      showsButtons={false}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      <View style={styles.slide}>
      <StatusBar backgroundColor="#3d5875" />
        <Image source={require('./../assets/images/intro1.jpg')} style={styles.image} />
        <Text style={styles.title}>Welcome to FilmSpot</Text>
        <Text style={styles.text}>Your ultimate destination for the latest movies, TV shows, and celebrity updates.</Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('./../assets/images/intro2.jpg')} style={styles.image} />
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.text}>Explore a wide range of movies and TV shows with detailed information and reviews.</Text>
      </View>
      <View style={styles.slide}>
        <Image source={require('./../assets/images/intro3.jpg')} style={styles.image} />
        <Text style={styles.title}>Stay Updated</Text>
        <Text style={styles.text}>Get the latest updates on your favorite celebrities and upcoming releases.</Text>
        <TouchableOpacity style={styles.button} onPress={handleDone}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4e6379',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#FFF',
    textAlign: 'center',
    paddingHorizontal: 30,
    fontWeight:'400'
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#007bff',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipText: {
    fontSize: 18,
    color: '#007bff',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007bff',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default IntroScreen;
