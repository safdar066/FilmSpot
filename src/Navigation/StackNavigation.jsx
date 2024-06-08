import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import MyTabs from "./BottomTab";
import MoviesDetails from "../screens/MoviesDetails";
import CelebrityDetails from "../screens/CelebrityDetails";
import SearchMoviesDetails from "../screens/SearchDetailsMovies";
import Trendinglist from "../screens/Trendinglist";
import UpcomingMovies from "../screens/UpcomingMovies";
import IntroScreen from "../screens/IntroScreen";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Awesome app",
        }}
      />
     
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="BottomTabs"
        component={MyTabs}
        options={{
          title: "Bottom",
        }}
      />

      <Stack.Screen name="MoviesDetails" component={MoviesDetails} />
      <Stack.Screen name="CelebrityDetails" component={CelebrityDetails} />
      <Stack.Screen name="SearchMoviesDetails" component={SearchMoviesDetails} />
      <Stack.Screen name="Trendinglist" component={Trendinglist} />
      <Stack.Screen name="UpcomingMoviesss" component={UpcomingMovies} />
      <Stack.Screen name="IntroScreen" component={IntroScreen}/>

    </Stack.Navigator>
  );
}
