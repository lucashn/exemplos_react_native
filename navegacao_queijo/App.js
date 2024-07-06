import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Principal from './telas/Principal'
import Queijo from './telas/Queijo'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Queijo" component={Queijo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}