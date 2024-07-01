import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tarefas from './telas/Tarefas';
import Adicionar from './telas/Adicionar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tarefas" component={Tarefas} />

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Adicionar" component={Adicionar} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}