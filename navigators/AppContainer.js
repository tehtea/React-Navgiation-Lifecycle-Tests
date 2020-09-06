import PlaceholderScreen from '../screens/PlaceholderScreen';
import AnotherPlaceholderScreen from '../screens/AnotherPlaceholderScreen';
import InitialScreen from '../screens/InitialScreen';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useStackNavigatorAtRoot } from '../settings';
import NestedStack from './NestedStack';

const screens = {
  InitialScreen,
  PlaceholderScreen,
  AnotherPlaceholderScreen,
  NestedStack
}

const navigatorSettings = {
  initialRouteName: 'InitialScreen',
  // these are needed to prevent header from rendering for stack navigator
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
    header: null,
  },
}

const AppNavigator = useStackNavigatorAtRoot ? createStackNavigator(
  screens,
  navigatorSettings,
) : createSwitchNavigator(
  screens,
  navigatorSettings,
)

const AppContainer = createAppContainer(AppNavigator);

// PlaceholderScreen
// AnotherPlaceholderScreen

export default AppContainer;