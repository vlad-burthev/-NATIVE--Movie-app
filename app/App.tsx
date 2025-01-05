import 'react-native-reanimated';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {colors} from './styles/styles-variables';
import {Provider} from 'react-redux';
import {store} from './store';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigation/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.primary_bg : colors.primary_bg,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaProvider style={backgroundStyle}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
