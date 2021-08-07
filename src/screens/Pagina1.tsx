import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {RootStackParamsList} from '../navigation/StackNavigator';
import {mainStyles} from '../theme/mainStyles';
//import {StackScreenProps} from '@react-navigation/stack';

//interface Props extends StackScreenProps<RootStackParamsList, 'Persona'> {}
type Props = DrawerScreenProps<RootStackParamsList, 'Pagina1'>;

const Pagina1 = ({navigation, route}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={mainStyles.globalMargin}>
      <Text style={mainStyles.title}>Pagina 1 Screen</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <Text style={{marginVertical: 20, alignSelf: 'center'}}>
        Navegar con argumentos
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{...mainStyles.botonGrande, backgroundColor: '#003b8b'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={mainStyles.textButotn}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...mainStyles.botonGrande, backgroundColor: '#c66509'}}
          onPress={() =>
            navigation.navigate('Persona', {id: 1, nombre: 'María'})
          }>
          <Text style={mainStyles.textButotn}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagina1;
