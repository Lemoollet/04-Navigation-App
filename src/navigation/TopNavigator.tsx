import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Chat from '../screens/Chat';
import Contacts from '../screens/Contacts';
import Albums from '../screens/Albums';
import {colors} from '../theme/mainStyles';

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  //estamos renombrando top
  const {top: paddingTop}: EdgeInsets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      style={{paddingTop}}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles-outline';
              break;
            case 'Contacts':
              iconName = 'people-circle-outline';
              break;
            case 'Albums':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={20} color="#900" />;
        },
      })}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
