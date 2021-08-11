import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './src/context/AuthContext';
import CustomDrawer from './src/navigation/CustomDrawer';
//import {StackNavigator} from './src/navigation/StackNavigator';
//import DrawerNavigator from './src/navigation/DrawerNavigator';
//import BottomTabs from './src/navigation/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        {/* <StackNavigator /> */}
        {/* <DrawerNavigator /> */}
        <CustomDrawer />
        {/* <BottomTabs /> */}
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;

/* <AuthContext.Provider
  value={{authState: authInitialState, signIn: () => {}}}> */
/* </AuthContext.Provider> */
