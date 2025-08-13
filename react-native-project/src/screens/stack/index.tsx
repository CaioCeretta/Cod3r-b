import { createStackNavigator } from "@react-navigation/stack"
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"

export default function Stack() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
    
      <Stack.Screen name="Screen 1" component={Screen1}/>
      <Stack.Screen name="Screen 2" component={Screen2}
      options={{
        title: 'Second Screen',
        headerBackTitle: 'Bora vorta'
      }}
      />
      <Stack.Screen name="Screen 3" component={Screen3} />

    </Stack.Navigator>
  )
}