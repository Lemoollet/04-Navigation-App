import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigator} from './StackNavigator';
import Settings from '../screens/Settings';
import {mainStyles} from '../theme/mainStyles';
import BottomTabs from './BottomTabs';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
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
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTabs')}
          style={{...mainStyles.menuBoton, flexDirection: 'row'}}>
          <Icon name="file-tray-stacked-outline" size={23} color="#900" />
          <Text style={mainStyles.textMenu}>Navegacion Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{
            ...mainStyles.menuBoton,
            flexDirection: 'row',
          }}>
          <Icon name="cog-outline" size={23} color="#900" />
          <Text style={mainStyles.textMenu}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
