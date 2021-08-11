import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {mainStyles} from '../theme/mainStyles';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const {authState} = useContext(AuthContext);

  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...mainStyles.globalMargin,
        flex: 1,
        backgroundColor: 'magenta',
        marginTop: insets.top + 20,
      }}>
      <Text style={mainStyles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={50} color="red" />
      )}
    </View>
  );
};

export default Settings;
