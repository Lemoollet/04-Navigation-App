import React from 'react';
import Pagina1 from '../screens/Pagina1';
import Pagina2 from '../screens/Pagina2';
import Pagina3 from '../screens/Pagina3';
import Persona from '../screens/Persona';
import {createStackNavigator} from '@react-navigation/stack';

//No se va a expandir, se quedara plano, por eso se ocupa type
export type RootStackParamsList = {
  Pagina1: undefined;
  Pagina2: undefined;
  Pagina3: undefined;
  Persona: {id: number; nombre: string};
};

const Stack = createStackNavigator<RootStackParamsList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Pagina1"
        options={{title: 'Página 1'}}
        component={Pagina1}
      />
      <Stack.Screen
        name="Pagina2"
        options={{title: 'Página 2'}}
        component={Pagina2}
      />
      <Stack.Screen
        name="Pagina3"
        options={{title: 'Página 3'}}
        component={Pagina3}
      />
      <Stack.Screen name="Persona" component={Persona} />
    </Stack.Navigator>
  );
};

/*Native Stack Navigator 

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Persona from '../screens/Persona';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Pagina1" component={Pagina1} />
      <Stack.Screen name="Pagina2" component={Pagina2} />
      <Stack.Screen name="Pagina3" component={Pagina3} />
    </Stack.Navigator>
  );
}; */
