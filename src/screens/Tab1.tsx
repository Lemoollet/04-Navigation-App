import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainStyles} from '../theme/mainStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...mainStyles.globalMargin,
        paddingTop: top,
      }}>
      <Text style={mainStyles.title}>Tab 1 Screen</Text>
      <Icon name="airplane-outline" size={50} color="#900" />
      <Icon name="fast-food-outline" size={50} color="#900" />
      <Icon name="barbell-outline" size={50} color="#900" />
      <Icon name="bonfire-outline" size={50} color="#900" />
      <Icon name="cart-outline" size={50} color="#900" />
      <Icon name="cloud-download-outline" size={50} color="#900" />
      <Icon name="game-controller-outline" size={50} color="#900" />
      <Icon name="subway-outline" size={50} color="#900" />
    </View>
  );
};

export default Tab1;

const styles = StyleSheet.create({});
