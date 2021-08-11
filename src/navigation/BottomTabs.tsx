import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Tab1 from '../screens/Tab1';
import TopNavigator from './TopNavigator';
import {colors} from '../theme/mainStyles';
import {StackNavigator} from './StackNavigator';

//============================================Android Bottom
const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          //borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'home-outline';
              break;
            case 'TopNavigator':
              iconName = 'planet-outline';
              break;
            case 'StackNavigator':
              iconName = 'business-outline';
              break;
          }
          return <Icon name={iconName} size={20} color="#900" />;
        },
      })}>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="TopNavigator" component={TopNavigator} />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

//============================================Ios Bottom
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          //borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1':
              iconName = 'home-outline';
              break;
            case 'TopNavigator':
              iconName = 'planet-outline';
              break;
            case 'StackNavigator':
              iconName = 'business-outline';
              break;
          }
          return <Icon name={iconName} size={20} color="#900" />;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
      /> */}
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="TopNavigator" component={TopNavigator} />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

//============================================Condition to show Bottom Tabs
const Tabs = () => {
  return Platform.OS === 'ios' ? <BottomTabs /> : <BottomTabsAndroid />;
};

export default Tabs;
