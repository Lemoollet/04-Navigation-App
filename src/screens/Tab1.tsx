import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainStyles} from '../theme/mainStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchabeIcon from '../components/TouchabeIcon';

const Tab1 = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        ...mainStyles.globalMargin,
        paddingTop: top,
      }}>
      <Text style={mainStyles.title}>Tab 1 Screen</Text>
      <TouchabeIcon name="airplane-outline" />
      <TouchabeIcon name="fast-food-outline" />
      <TouchabeIcon name="barbell-outline" />
      <TouchabeIcon name="bonfire-outline" />
      <TouchabeIcon name="cart-outline" />
      <TouchabeIcon name="cloud-download-outline" />
      <TouchabeIcon name="game-controller-outline" />
      <TouchabeIcon name="subway-outline" />
    </View>
  );
};

export default Tab1;

const styles = StyleSheet.create({});
