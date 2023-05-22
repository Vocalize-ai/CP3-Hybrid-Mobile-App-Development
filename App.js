import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, StatusBar, Platform } from 'react-native';


import Cadastrar from './src/screens/cadastro/Cadastrar';
import Lista from './src/screens/lista/Lista';
import Login from './src/screens/login/Login';

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
    <>
      <StatusBar
        backgroundColor="#7C007C"
        barStyle={Platform.OS === 'android' ? 'white-content' : 'default'}
      />

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
          <Stack.Screen options={{
            headerLeft: null,
          }} name="Lista">
            {() => (
              <ScreenContainer>
                <Lista />
              </ScreenContainer>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

export default App;
