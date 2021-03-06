import React, {useContext, useEffect} from 'react';
import {mainStyles} from '../theme/mainStyles';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamsList} from '../navigation/StackNavigator';
import {AuthContext} from '../context/AuthContext';

//interface Props extends StackScreenProps<RootStackParamsList, 'Persona'> {}
type Props = StackScreenProps<RootStackParamsList, 'Persona'>;

const Persona = ({navigation, route}: Props) => {
  const {changeUsername} = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.nombre);
  }, []);

  return (
    <View style={mainStyles.globalMargin}>
      <Text style={mainStyles.title}>Persona Sceen</Text>
    </View>
  );
};

export default Persona;
