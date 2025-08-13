# React Native Essentials Lesson

The first thing is to delete the folders [app, components, hooks, scripts] and leave only the node_modules and the assets
folder.

Create a src folder and inside the src, create a index.js and change the package.json by adding the attribute "main"
with the value of "src/index.js" which is going to be our "entry port".

Now, inside the src, we are going to divide it into the folders "screens" and a "components". But if we were going to add
the state management, hooks, contexts and so on, we would create another folder named "data", and inside of it we would place
the hooks, contexts, constants, models, etc.

In the screens folder, we are going to separate each screen into a different folder, to make it very clear to us, which
are the screens being accessed through the `drawer, which screens from the `stack` and the screens accessed via the tab
navigation.

We'll start by creating an index.tsx inside the drawer folder, this index.tsx is what's going to control the navigation
through the drawer, so inside of it, we'll create an app component, inside that app component we are going to wrap every
thing inside a `View`, a `View` is pretty much like a div in a web app, where we will group several elements.

Inside that view we'll start by creating a Text tag, is like the p, span, or things like it.

Now on our index.js, we will register the first component that is going to be loaded by the app and is the App located on
drawer.tsx

In the same way we have, in react, a functional component, we also have one in react native, as well as we have jsx on react,
here we also have it. Jsx is a syntax that extends JS to incorporate these tags and these tags work like instances of these
components that are other functions inside react native.

For CSS we import the style sheet from 'react-native' library, then use it as an object like

const styles = StyleSheet.create({

})

and these styles are strongly inspired on the css properties, so it would simply be

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

  }
})

and for us to use this property container, which is a set of styles, on the component we want to use it, we just add

<View style={styles.container}> passing that object and property to the style attribute.

Tailwind in here, is a bit more unstable that the web one, so that's why we prefer not to use it. but there is a NativeWind
library.

Inside the drawer folder, we'll create a component called initial.tsx, which is the component that will be first generated
on the drawer.

## Drawer 
Now, going back to the index, this file utilizes a DrawerNavigator from the library @react-navigation/drawer, and based
on this drawer, we will define the screens we'll use in the app.

This whole jsx is wrapped on a NavigationContainer, which is a component imported from @react-navigation/native

for us to don't keep repeating the same structure, full of detials, we'll create a function where we will pass some
parameters to it and that function will help us creating each of the screens we will need to declare here.

the function receives the name of the screen, the icon of the drawer, the title and the component to load, that function
will return a screen based on the properties we received we will return a DrawerScreen based on the parameters.

One thing we must notice is that the drawerIcon receives a property to know if that option is selected or focused. Because
then we can have different properties for that element

Now on the Drawer.navigation, inside of the tag, we are going to use this function, e.g.g
'
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {screen({
          name: 'Initial',
          icon: 'home-outline',
          title: 'Initial',
          component: initial
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  )

and on the app home we will see that initial being loaded as default

Drawer is a very useful featura because we can have many options of funcionatilities in the application. 

## Images

For images in react native we use the Image tag and one of the attributes is the
source, which we use like source={require('pathToFile')}, on remote images we use
source={{ uri: 'remoteurl' }}

## Text

Next texts are required to be inside a Text component and are similar to web

## Components

Functional components are very similar to the ones from the web, we simply can export an interface, which receives the
properties, then pass it as parameter, and so son

## Scroll

In ReactNative there is a specific component for us when we want to create a scrollable component, which is the ScrollView

The ScrollView is a view that scrolls, basically

## Button

Different from the web, instead of onClick, here we utilize the onPress, and to change the button color there is an property
named color where we assign to it a hex code

## Pressable

Pressable is a component very similar to a button, the difference is that pressable does not have a style, we can it wrap 
it on an image, for example. We can wrap a pressable on everything

## TextInput

On the TextInput we are using a controlled input, as we would on react, utilize a Text for a label, and the TextInput
receives the same properties, the ones different is placeholderTextColor, one other difference is the onChange that is
onChangeText and the keyboardType, which we can change for
what the input intends to do. Such as e-mail numpad, number, etc.

    
## Stack

In a Stack we utilize que same principle as we used on the Drawer, we create a const Stack that is equal to createStackNavigator()
and inside the open and closing tag, we create many Stack.Screen

For our exemplification, we are going to have 3 screens, where one screen has a button to direct us to the next one.

with the function call onPress={() => navigation.navigate('screenPathToRedirect'))}

We are able to make this, because when we are using the navigator, it is passed as parameter, even if we don't explicitly
pass, in these props we'll have the navigation, and inside the navigation, we have functions to navigate  and other actions.

We would define it like this

<Stack.Navigator>
    
      <Stack.Screen name="Screen 1" component={Screen1}/>
      <Stack.Screen name="Screen 2" component={Screen2}/>
      <Stack.Screen name="Screen 3" component={Screen3} />

    </Stack.Navigator>

and for us to be able to navigate, we will pass the screen name, then on the functions where we navigate, we pass the
same name for it as we passed on the Stack.Screen, such as

onPress={() => navigation.navigate('Screen 3')}

We can pass options to the Stack.Navigator by passing the options as an attribute, as well as options we can pass to the
Stack.Screen, such as a different title, a headerShown, for us to define whetherwe want the screen to have a header or not, define a headerBackTitle, and many more

## Tabs

We are using as an example, the same three screens we were using on the example, tabs allow us to define screens that appear
as tabs, usually displayed at the bottom of the app and unlike stack navigation, which typically pushes a new screen on top
of the previous one, tab navigation keeps the same navigation context while switching between different tabs.

So for the example we used a 

<Tab.Navigator>
  <Tabs.Screen
                name="Tab1"
                component={Tab1}
                options={{
                    title: 'First',
                    tabBarIcon: ({ focused }: any) => (
                        <Ionicons
                            name="home-outline"
                            size={20}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                }}
            />

by default the tabs appear at the bottom, but we can cusotmize the tab bar location and style if needed
