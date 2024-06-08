import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Home';

import { MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/Profile';
import Trendinglist from '../screens/Trendinglist';
import { FontAwesome6 } from '@expo/vector-icons';
import UpcomingMovies from '../screens/UpcomingMovies';
import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#3d5875',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Trendinglist"
        component={Trendinglist}
        options={{
          tabBarLabel: 'Trending',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-bill-trend-up" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UpcomingMovies"
        component={UpcomingMovies}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="upcoming" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}