import React, {useContext} from 'react';
import {Button} from 'react-native';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {mainStyles} from '../theme/mainStyles';

const Albums = () => {
  const {authState, logout} = useContext(AuthContext);

  return (
    <View style={mainStyles.globalMargin}>
      <Text style={mainStyles.title}>Albums screen</Text>
      {authState.isLoggedIn && <Button title="logout" onPress={logout} />}
    </View>
  );
};

export default Albums;
