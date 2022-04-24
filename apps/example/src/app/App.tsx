/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import './i18n';
import './utils/ignore-warnings';

import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { ToggleStorybook } from '../storybook/toggle-storybook';
import { RootStore, RootStoreProvider, setupRootStore } from './models';
import { AppNavigator, useNavigationPersistence } from './navigators';
import { ErrorBoundary } from './screens';
import { initFonts } from './theme/fonts';
import * as storage from './utils/storage';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

/**
 * This is the root component of our app.
 */
function App() {
  // const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      await initFonts();
      await setupRootStore().then(setRootStore);
    })();
  }, []);

  // useEffect(() => {
  //   ;(async () => {
  //     await initFonts()
  //   })()
  // }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!rootStore || !isNavigationStateRestored) return null;

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NativeBaseProvider config={config}>
          <ToggleStorybook>
            <ErrorBoundary catchErrors={'always'}>
              <AppNavigator
                initialState={initialNavigationState}
                onStateChange={onNavigationStateChange}
              />
            </ErrorBoundary>
          </ToggleStorybook>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </RootStoreProvider>
  );
}

export default App;
