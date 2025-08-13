import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Initial from "./initial";
import Text from "./Text";
import Image from "./Image";
import Input from "./Input";
import Button from "./Button";
import Pressable from "./Pressable";
import Scroll from "./Scroll";
import Stack from "../stack";
import Tabs from "../tabs";


export default function App() {
  const Drawer = createDrawerNavigator()

  function screen(props: {name: string; icon: string; title: string; component: any}) {
    return (
      <Drawer.Screen
        name={props.name}
        component={props.component}
        options={{
          drawerIcon: ({focused}: any) => (
            <Ionicons
              name={props.icon as any}
              size={24}
              color={focused ? '#1c80FF' : "#000"}
              />
          ),
          drawerLabel: props.title,
          title: props.title
        }}
      
      >


      </Drawer.Screen>
    )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {screen({
          name: 'Initial',
          icon: 'home-outline',
          title: 'Initial',
          component: Initial
        })}

        {screen({
          name: 'Texts',
          icon: 'text-outline',
          title: 'Texts',
          component: Text
        })}

        {screen({
          name: 'Images',
          icon: 'image-outline',
          title: 'Images',
          component: Image
        })}

        {screen({
          name: 'Input',
          icon: 'key-outline',
          title: 'Input',
          component: Input
        })}

        {screen({
          name: 'Button',
          icon: 'ellipse-outline',
          title: 'Button',
          component: Button
        })}

        {screen({
          name: 'Pressable',
          icon: 'finger-print',
          title: 'Pressable',
          component: Pressable
        })}

        {screen({
          name: 'Scroll',
          icon: 'list-outline',
          title: 'Scroll',
          component: Scroll
        })}

        {screen({
          name: 'Stack',
          icon: 'layers-outline',
          title: 'Stack',
          component: Stack
        })}

        {screen({
          name: 'Tabs',
          icon: 'albums-outline',
          title: 'Tabs',
          component: Tabs
        })}







      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    color: 'blue'
  }
})