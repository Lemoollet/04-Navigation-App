import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {StackNavigator} from './src/navigation/StackNavigator';
//import DrawerNavigator from './src/navigation/DrawerNavigator';
import CustomDrawer from './src/navigation/CustomDrawer';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <CustomDrawer />
    </NavigationContainer>
  );
};

export default App;
