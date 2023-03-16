// @packages
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// @routes
import DrawerNavigator from './src/routes/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;
