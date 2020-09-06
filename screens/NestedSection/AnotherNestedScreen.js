import React, { useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from 'react-navigation-hooks';
import { useNavigator } from '../../settings';
import styles from '../../styles/styles';

const AnotherNestedScreen = ({setActiveRoute, navigation}) => {
  useEffect(() => {
    console.log('AnotherNestedScreen is mounted')
    return () => {
      console.log('AnotherNestedScreen is unmounted')
    }
  }, []);

  if (useNavigator) {
    useFocusEffect(useCallback(() => {
      console.log('AnotherNestedScreen is focused')
      return () => {
        console.log('AnotherNestedScreen is no longer focused')
      }
    }, []));
  }

  return (
    <View style={styles.container}>
      <Text>
                This is another nested screen, hi!
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

export default AnotherNestedScreen;