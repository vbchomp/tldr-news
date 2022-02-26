import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  HomeOutlined,
  SettingOutlined,
  CustomerServiceOutlined,
  DollarOutlined,
  LaptopOutlined,
  TrophyOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../HomeScreen.js';
import Settings from './screens/_SettingsScreen.js';
import TechNews from './screens/_TechNews.js';
import EntertainmentNews from './_EntertainmentNews.js';
import MoneyNews from './screens/_MoneyNews.js';
import SportsNews from './screens/_SportsNews.js';
import HealthNews from './screens/_HealthNews.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          color: '#5f9ea0',
          size: '30px',
          activeTintColor: '#173245',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <HomeOutlined color={props.color} size={props.size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <SettingOutlined color={props.color} size={props.size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tech"
          component={TechNews}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <LaptopOutlined color={props.color} size={props.size} />
            ),
          }}
        />
        <Tab.Screen
          name="Entertainment"
          component={EntertainmentNews}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <CustomerServiceOutlined color={props.color} size={props.size} />
            ),
          }}
        />
        <Tab.Screen
          name="Money"
          component={MoneyNews}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <DollarOutlined color={props.color} size={props.size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sports"
          component={SportsNews}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <TrophyOutlined color={props.color} size={props.size} />
            ),
          }}
        />
        <Tab.Screen
          name="Health"
          component={HealthNews}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MedicineBoxOutlined color={props.color} size={props.size} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
