import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigator } from '../settings';
import styles from '../styles/styles';

const InitialScreen = ({setActiveRoute, navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is the initial screen, what do you want to do?</Text>
      <Button
        title={'Go to placeholder screen'}
        onPress={() => {
          if ( useNavigator ) {
            return navigation.navigate('PlaceholderScreen')
          }
          return setActiveRoute('PlaceholderScreen');
        } }
      />
      <Button
        title={'Go to another placeholder screen'}
        onPress={() => {
          if ( useNavigator ) {
            return navigation.navigate('AnotherPlaceholderScreen')
          }
          setActiveRoute('AnotherPlaceholderScreen') 
        }}
      />
      <Button
        title={'Go to nested screen'}
        onPress={() => {
          if ( useNavigator ) {
            return navigation.navigate('NestedScreen')
          }
          setActiveRoute('NestedScreen') 
        }}
      />
    </View>
  )
}

export default InitialScreen;