import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Principal from './telas/Principal'
import Confirmacao from './telas/Confirmacao'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Confirmacao" component={Confirmacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}