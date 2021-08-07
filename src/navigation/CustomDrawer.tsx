import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigator} from './StackNavigator';
import Settings from '../screens/Settings';
import {mainStyles} from '../theme/mainStyles';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={{backgroundColor: '#0081cf'}}>
      <View style={mainStyles.avatarContainer}>
        <Image
          style={mainStyles.avatar}
          source={{
            uri: 'https://lh3.googleusercontent.com/ogw/ADea4I5z0emQ2k9nHUwSyMLurh_93kDOkeT0LpJV8X0Xhw=s192-c-mo',
          }}
        />
      </View>
      <View style={mainStyles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={mainStyles.textMenu}>Navegacion Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={mainStyles.textMenu}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
