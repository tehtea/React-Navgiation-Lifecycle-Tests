import React, { useEffect, useCallback } from 'react';
import { Button, View, Text } from 'react-native';
import { useFocusEffect } from 'react-navigation-hooks';
import { useNavigator } from '../settings';
import styles from '../styles/styles';

const AnotherPlaceholderScreen = ({setActiveRoute, navigation}) => {
  useEffect(() => {
    console.log('AnotherPlaceholderScreen is mounted')
    return () => {
      console.log('AnotherPlaceholderScreen is unmounted')
    }
  }, []);
    
  if (useNavigator) {
    useFocusEffect(useCallback(() => {
      console.log('AnotherPlaceholderScreen is focused')
      return () => {
        console.log('AnotherPlaceholderScreen is no longer focused')
      }
    }, []));
  }

  return (
    <View style={styles.container}>
      <Text>
                This is another placeholder screen, hi!
      </Text>
      <Button 
        title="Back to main screen"
        onPress={() => {
          if ( useNavigator ) {
            return navigation.navigate('InitialScreen')
          }
          setActiveRoute('InitialScreen')
        }}
      />
    </View>
  )
}

export default AnotherPlaceholderScreen;