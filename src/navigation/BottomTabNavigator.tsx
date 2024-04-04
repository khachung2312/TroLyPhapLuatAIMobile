/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  AssistantScreen,
  SearchScreen,
  StorageBookScreen,
  UserScreen,
} from './index';

import {
  Home,
  Message,
  SearchNormal,
  Bookmark,
  User,
} from 'iconsax-react-native';
import {createStyles} from './styles';
import {ThemeContext} from '../themes/ThemeContext';
import {Text} from 'react-native';
import BottomComponent from '../component/BottomComponent';
import {useTranslation} from 'react-i18next';
import i18n from '../utils/i18n';
import ProcedureScreen from '../features/procedure_feature/ProcedureScreen';
import PostsScreen from '../features/posts_feature/PostsScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {theme} = useContext(ThemeContext);
  const styles = createStyles(theme);
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveBackgroundColor: styles.bottomTab.color,
        tabBarActiveBackgroundColor: styles.bottomTab.color,
        tabBarIcon: ({focused, size}) => {
          if (route.name === 'HomeScreen') {
            return (
              <BottomComponent>
                <Home size={size} color={focused ? '#E90064' : '#c4c4c4'} />
                {focused && (
                  <Text style={[styles.text]}>{i18n.t('bottomTab.home')}</Text>
                )}
              </BottomComponent>
            );
          } else if (route.name === 'AssistantScreen') {
            return (
              <BottomComponent>
                <Message size={size} color={focused ? '#E90064' : '#c4c4c4'} />
                {focused && (
                  <Text style={[styles.text]}>
                    {i18n.t('bottomTab.assistant')}
                  </Text>
                )}
              </BottomComponent>
            );
          } else if (route.name === 'SearchScreen') {
            return (
              <BottomComponent>
                <SearchNormal
                  size={size}
                  color={focused ? '#E90064' : '#c4c4c4'}
                />
                {focused && (
                  <Text style={[styles.text]}>
                    {i18n.t('bottomTab.search')}
                  </Text>
                )}
              </BottomComponent>
            );
          } else if (route.name === 'StorageBookScreen') {
            return (
              <BottomComponent>
                <Bookmark size={size} color={focused ? '#E90064' : '#c4c4c4'} />
                {focused && (
                  <Text style={[styles.text]}>
                    {i18n.t('bottomTab.storage')}
                  </Text>
                )}
              </BottomComponent>
            );
          } else {
            return (
              <BottomComponent>
                <User size={size} color={focused ? '#E90064' : '#c4c4c4'} />
                {focused && (
                  <Text style={[styles.text]}>{i18n.t('bottomTab.user')}</Text>
                )}
              </BottomComponent>
            );
          }
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="AssistantScreen"
        component={AssistantScreen}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="StorageBookScreen"
        component={StorageBookScreen}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false}}
      />
       <Tab.Screen
        name="ProcedureScreen"
        component={ProcedureScreen}
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            display: 'none',

          }
        }}
      />
       <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: {
            display: 'none',

          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
