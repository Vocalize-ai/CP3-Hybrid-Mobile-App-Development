import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';


import Login from './src/screens/login/Login';
import Cadastrar from './src/screens/cadastro/Cadastrar';
import Lista from './src/screens/lista/Lista';

const Stack = createNativeStackNavigator();
const ScreenContainer = ({ children }) => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#e9e9e9' }}>
      {children}
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            textAlign: 'center',
            color: '#7C007C',
            fontWeight: '500',
            fontSize: 22
          }, headerStyle: {
            backgroundColor: '#e9e9e9',
            borderBottomWidth: 1.5,
            borderBottomColor: '#000C'
            
          },
        }}
      >
        <Stack.Screen name="Login">
          {() => (
            <ScreenContainer>
              <Login />
            </ScreenContainer>
          )}
        </Stack.Screen>
        <Stack.Screen name="Cadastrar">
          {() => (
            <ScreenContainer>
              <Cadastrar />
            </ScreenContainer>
          )}
        </Stack.Screen>
        <Stack.Screen name="Lista">
          {() => (
            <ScreenContainer>
              <Lista />
            </ScreenContainer>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
