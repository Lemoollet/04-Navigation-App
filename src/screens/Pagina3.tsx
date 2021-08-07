import React from 'react';
import {mainStyles} from '../theme/mainStyles';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamsList} from '../navigation/StackNavigator';

//interface Props extends StackScreenProps<RootStackParamsList, 'Persona'> {}
type Props = StackScreenProps<RootStackParamsList, 'Pagina3'>;

const Pagina3 = ({navigation, route}: Props) => {
  return (
    <View style={mainStyles.globalMargin}>
      <Text style={mainStyles.title}>Pagina 3</Text>
      <Button title="regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3;
