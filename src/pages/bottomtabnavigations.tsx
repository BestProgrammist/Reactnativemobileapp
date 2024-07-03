import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from './homescreen';
import Workscreen from './workscreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function BottomTabnavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="All" 
        component={Homescreen}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Icon name='rocket' color='#4F8EF7'/>
          )
          // tabBarIcon:({color, size}) => (
          //   let iconName;
          // )
        }} 
      />
      <Tab.Screen name="Work" component={Workscreen} />
      <Tab.Screen name="Settings" component={Workscreen} />
    </Tab.Navigator>
  );
}

export default BottomTabnavigation;