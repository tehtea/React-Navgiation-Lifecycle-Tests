import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CustomRouter from './navigators/CustomRouter';

import { useNavigator } from './settings';
import AppContainer from './navigators/AppContainer';

export default function App() {
  return (
    <>
      {useNavigator ? <AppContainer/> : <CustomRouter/>}
    </>
  );
}