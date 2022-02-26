import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import {
  SmileOutlined,
} from '@ant-design/icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Floofs from './screens/Floofs.js';

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
          name='Floofs'
          component={Floofs}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <SmileOutlined style={{ size: '30px', color: '5f9ea0' }} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
