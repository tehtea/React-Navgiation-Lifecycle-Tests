import React, { useState } from 'react';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import AnotherPlaceholderScreen from '../screens/AnotherPlaceholderScreen';
import InitialScreen from '../screens/InitialScreen';
import NestedScreen from '../screens/NestedSection/NestedScreen';
import AnotherNestedScreen from '../screens/NestedSection/AnotherNestedScreen';

const CustomRouter = () => {
  const [activeRoute, setActiveRoute] = useState('InitialScreen')
  return (
    <>
      {(activeRoute === 'InitialScreen') &&
            <InitialScreen
              setActiveRoute={setActiveRoute}
            />
      }
      {(activeRoute === 'PlaceholderScreen') &&
            <PlaceholderScreen
              setActiveRoute={setActiveRoute}
            />
      }
      {(activeRoute === 'AnotherPlaceholderScreen') &&
            <AnotherPlaceholderScreen
              setActiveRoute={setActiveRoute}
            />
      }
      {(activeRoute === 'NestedScreen') && 
            <NestedScreen
              setActiveRoute={setActiveRoute}
            />}
      {(activeRoute === 'AnotherNestedScreen') &&
            <AnotherNestedScreen
              setActiveRoute={setActiveRoute}
            />
      }
    </>
  );
}

export default CustomRouter;