import React, { useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from 'react-navigation-hooks';
import { useNavigator } from '../settings';
import styles from '../styles/styles';

const PlaceholderScreen = ({setActiveRoute, navigation}) => {
  useEffect(() => {
    console.log('PlaceholderScreen is mounted')
    return () => {
      console.log('PlaceholderScreen is unmounted')
    }
  }, []);

  if (useNavigator) {
    useFocusEffect(useCallback(() => {
      console.log('PlaceholderScreen is focused')
      return () => {
        console.log('PlaceholderScreen is no longer focused')
      }
    }, []));
  }
    
  return (
    <View style={styles.container}>
      <Text>
                This is a placeholder screen, hi!
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

export default PlaceholderScreen;