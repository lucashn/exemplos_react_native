import { createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer} from "@react-navigation/native"

import Principal from './telas/Principal'
import Tabela from './telas/Tabela'
import Detalhes from './telas/Detalhes'

const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer screenOptions={{headerShown: false}}>
    <Stack.Navigator>
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Tabela" component={Tabela}/>
      <Stack.Screen name="Detalhes" component={Detalhes}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}