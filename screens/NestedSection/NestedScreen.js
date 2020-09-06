import React, { useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useFocusEffect } from 'react-navigation-hooks';
import { useNavigator } from '../../settings';
import styles from '../../styles/styles';

const NestedScreen = ({setActiveRoute, navigation}) => {
  useEffect(() => {
    console.log('NestedScreen is mounted')
    return () => {
      console.log('NestedScreen is unmounted')
    }
  }, []);

  if (useNavigator) {
    useFocusEffect(useCallback(() => {
      console.log('NestedScreen is focused')
      return () => {
        console.log('NestedScreen is no longer focused')
      }
    }, []));
  }

  return (
    <View style={styles.container}>
      <Text>
        This is a nested screen, hi!
      </Text>
      <Button 
        title="Go to another nested screen"
        onPress={() => {
          if ( useNavigator ) {
            return navigation.navigate('AnotherNestedScreen')
          }
          setActiveRoute('AnotherNestedScreen')
        }}
      />
    </View>
  )
}

export default NestedScreen;