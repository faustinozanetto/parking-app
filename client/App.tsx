import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/home';
import ParkScreen from './src/screens/park';
import ProfileScreen from './src/screens/profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#0ea5e9',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Icon name="home" size={30} color={color} />,
          }}
        />
        <Tab.Screen
          name="Park"
          component={ParkScreen}
          options={{
            tabBarLabel: 'Park',
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="parking" size={30} color={color} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => <Icon name="user" size={30} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
