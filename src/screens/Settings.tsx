import React from 'react';
import {Text, View} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {mainStyles} from '../theme/mainStyles';

const Settings = () => {
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
    </View>
  );
};

export default Settings;
