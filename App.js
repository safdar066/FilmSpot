import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import MyStack from './src/Navigation/StackNavigation';

export default function App() {
  return (
<NavigationContainer>
  <MyStack />
</NavigationContainer>  );
}