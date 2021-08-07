import React, {useEffect} from 'react';
import {mainStyles} from '../theme/mainStyles';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {RootStackParamsList} from '../navigation/StackNavigator';

//interface Props extends StackScreenProps<RootStackParamsList, 'Persona'> {}
type Props = StackScreenProps<RootStackParamsList, 'Pagina2'>;

const Pagina2 = ({navigation, route}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={mainStyles.globalMargin}>
      <Text style={mainStyles.title}>Pagina 2</Text>
      <Button
        onPress={() => navigation.navigate('Pagina3')}
        title="Ir a pagina 3"
      />
    </View>
  );
};

export default Pagina2;
