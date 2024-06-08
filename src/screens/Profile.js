import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <LinearGradient colors={['#3d5875', '#4e6379']} style={styles.profileContainer}>
        <Image
          source={require('./../assets/images/celb5.jpg')} // Replace with an actual image path or use a URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Muhammad Safdar</Text>
        <Text style={styles.username}>@safdar066</Text>
        <Text style={styles.location}>Gulberg III, Lahore</Text>
      </LinearGradient>
      <View style={styles.infoContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.cardText}>
            Hey, I'm Safdar, React Native App Developer. I like action, crime, and thriller movies.
          </Text>
        </View>
        <Text style={styles.cardTitle}>Statistics</Text>

        <View style={styles.statisticsContainer}>
          <View>
          <View style={styles.statistic}>
            <Text style={styles.statisticNumber}>120</Text>
            <Text style={styles.statisticLabel}>Watched Movies</Text>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.statisticNumber}>200</Text>
            <Text style={styles.statisticLabel}>Followers</Text>
          </View>
          </View>
          <View>
          <View style={styles.statistic}>
            <Text style={styles.statisticNumber}>80</Text>
            <Text style={styles.statisticLabel}>Watchlist</Text>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.statisticNumber}>150</Text>
            <Text style={styles.statisticLabel}>Following</Text>
          </View>
          </View>
          <View style={styles.statistic}>
            <Text style={styles.statisticNumber}>50</Text>
            <Text style={styles.statisticLabel}>Favorites</Text>
          </View>
        </View>
        <Text style={styles.cardTitle}>Social Links</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-linkedin" size={20} color="#0e76a8" />
            <Text style={styles.socialText}>@safdar066</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-instagram" size={20} color="#C13584" />
            <Text style={styles.socialText}>@safdar066</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e6379',
  },
  profileContainer: {
    padding: 40,
    alignItems: 'center',
    
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
  },
  username: {
    fontSize: 12,
    color: '#ccc',
  },
  location: {
    fontSize: 12,
    color: '#ccc',
  },
  infoContainer: {
    padding: 120,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,


  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    // marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 10,
    color:'#3d5875'
  },
  cardText: {
    fontSize: 12,
    fontWeight:'400',
    textAlign:'justify',
    letterSpacing: 1.5,
    lineHeight: 20
  
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statistic: {
    alignItems: 'center',
    marginBottom: 10,
  },
  statisticNumber: {
    fontSize: 14,
    fontWeight: '500',
    
  },
  statisticLabel: {
    fontSize: 12,
    color: 'gray',
    fontWeight:'400'
  },
  socialContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    padding: 25,
    alignItems:'center'
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  socialText: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight:'400'
  },
 
});

export default ProfileScreen;
