import React from 'react';
import {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {mainStyles} from '../theme/mainStyles';
import {AuthContext} from '../context/AuthContext';

const Contacts = () => {
  const {authState, signIn} = useContext(AuthContext);
  //estamos destrucutrando authState
  //const {authState: {isLoggedIn}, signIn} = useContext(AuthContext);

  return (
    <View style={mainStyles.globalMargin}>
      <Text style={mainStyles.title}>Contacts Screen</Text>
      {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({});
