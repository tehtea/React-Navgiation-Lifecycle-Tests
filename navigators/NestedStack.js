import { createStackNavigator } from 'react-navigation';

import NestedScreen from '../screens/NestedSection/NestedScreen';
import AnotherNestedScreen from '../screens/NestedSection/AnotherNestedScreen';

const screens = {
  NestedScreen,
  AnotherNestedScreen,
};

const NestedStack = createStackNavigator(
  screens,
  {
    initialRouteName: 'NestedScreen',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      header: null,
    },
  },
)

export default NestedStack;