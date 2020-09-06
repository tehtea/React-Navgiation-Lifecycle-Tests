# Tests on component lifecycle for React Navigation
This app is just a toy example used to enumerate the behaviour of components using React Navigation (v3.13.0).
Namely, the goal is to investigate whether components using a navigator will unmount when user navigates away from them. The
'control experiment' is to use a custom router (navigators/CustomRouter.js) instead of a navigator to navigate around the app.

## Results
The results show that un-nested components, i.e. those declared directly in navigators/AppContainer.js will unmount 
immediately after they are navigated away from. 
However, nested components, i.e. those declared under navigators/NestedStack.js will only unmount after all 
nested components are navigated away from, i.e. neither screens/NestedSection/NestedScreen.js nor 
screens/NestedSection/AnotherNestedScreen.js are in the foreground. 
However, useFocusEffect will still accurately show whether a component is in the foreground, no mattter whether is it focused or not.
Finally, all components mounted and unmounted at the instance at which they are focused / unfocused when the custom router was used.

## How to run
1. Install all dependencies using `npm install`
2. (On Android) Run the app using `npm run android`