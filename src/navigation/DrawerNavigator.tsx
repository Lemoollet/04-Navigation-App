import React from 'react';
import Settings from '../screens/Settings';
import {StackNavigator} from './StackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';

/* export type RootDrawerParamsList = {
  StackNavigator: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamsList>(); */
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings'}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
