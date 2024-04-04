import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '../themes/ThemeContext';
import BottomTabNavigator from './BottomTabNavigator';

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
