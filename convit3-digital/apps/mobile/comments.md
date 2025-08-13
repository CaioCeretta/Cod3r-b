# React Native Comments

## Init
First things first, when we create an expo project, it will start with a few hooks and components, and also a script to
reset the project. So the first thing we'll do is to run this script with node, and if there is any folder named hooks,
constants, etc. We will delete it and only keep the app folder and the assets folder, so it will be as clean as possible.

Then we'll create a .env file for our environment variables where we'll add a EXPO_PUBLIC_API_URL and pass the default
ip, wich was defined as a pattern by android for us to be able to access the local machine http://10.0.2.2:4000, 

We also need to add on the .env this code

When we use this key inside the .env, it says that it will use the configuration of a monorepo, so it will look for the
dependencies, inside the project, aswell as in the node modules of the repository as a whole.

EXPO_USE_METRO_WORKSPACE_ROOT=1 npx expo start

this code is saying that our project will be inside a workspace, to expo understand that we are using a workspace inside
our project.

## How is this code working?

On the RootLayout we utilize the component <Stack>, that defines a stack navigation to manage the main routes of the app.
The Stack.Screen with the name (tabs), its maping to a folder named tabes inside the file structure, so react native
understands that the content inside the folder (tabs) will be rendered when the main route is accessed. The (tabs) is treated
like a specific routes layout, where it encapsulates the screens or sub routes associated.

We'll have specific cases, where we, for example, inside the tabs folder, link to a file /eventos/${evento.id} and this
eventos is located in the stack folder, even though we are in the tabs.

Expo Router understands this route like this:

1 - Main Stack, in our root layout we defined a Stack, and the Stack.Screen is pointing to the folder (tabs), this mean
that any folder inside the (tabs) will be managed by the Stack layout.

2 - Link dynamic on /eventos/$id

When we create a link like this, what is happening here, is that expo-router tries to find the corresponding route on the
file structure, the route /eventos/${id} maps to (tabs)/eventos/[id].tsx, but we got to stack, because the tabs behavior
was configured in the Stack, so he understands that the tabs routes also pass through there

3 - Link working without the prefix /tabs/

In our project, expo-router doesn't require us to include explictly the full path /tabs/eventos because he automatically
resolves relative routes to the folder structure and the context of current layout.
Because we declared the RootLayout as a Stack and inside we configured (tabs) as a subroute, and the route /eventos/${id}
even though it is located in tabs, all the routes inside tabs will automatically be nested in the Stack. So even if (tabs)
is a tabs layout, he is "inside" the Stack.

So basically, even if we are on the eventos.tsx inside (tabs), stack is encapsulating everything, so he is configured as
the main layout that wraps (tabs), and expo router resolves the routes in the higher level, so he doesn't consider
automatically that a route like /eventps/${id} belongs exclusively to (tabs) or at the local context where the link is defined.
He searches the route in the context of the global hierarchy, and because Stack is on the top, the route is resolved into it.

So if we had two folders eventos, one in stack and one in eventos and we want to target the eventos, we would have to pass it as

<Link href="/tabs/eventos/${id}" />







## Styling

For the styling we are taking an approach quite similar to tailwind, we are creating a styles folder inside the root
folder, and inside, we created a utility and an index.ts, inside the utility.ts we created a constant styles and
assigned to it a StyleSHeet object from react native and called the create method
from that class. 

inside the create method, we create and export three other objects, a flex1, justifyCenter and alignCenter, which are
pointing to the properties from CSS

and now on our index, we are exporting everything from that utility file, and we can eventually create other files for the
components, many other files just for paddings, other for margins, colors and so on, and we can go by fragmenting the main
properties that we'll use inside our app, then for example, in our index.ts, that was 

style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}

it's now 

style={[
  flex1,
  justifyCenter,
  alignCenter
]}

we can do this aswell as a class that make a grouping of similar stylings like

const styles = StyleSheet.create({
  centerGrow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const centerGrow = styles.centerGrow

we can also use variables we just defined like

botao: {
    backgroundColor: bgRed500.backgroundColor,
    padding: 10,
    borderRadius: 5
  }

In the code we are not separating the paddings, margins, etc... But it's also a good option to create separate styling for 
each style

## Folders

Our default layoult is to add the pages as stacks, so if we move from one page to another, that page will be placed above
the last one, but we can also create route groups, just as we did in next, so if we are working with specific navigations
we can create like (tabs), and in this folder we can have a new layout, and in this layout we can do the navigation between
tabs.

## Files

The initial folder structure, is (tabs), where we hold the index.ts and will be the first to be loaded, but on our root 
layout, it is returning a <Stack> and inside it a Stack.Screen with the name of the (tabs)/index, so it will be a stack,
but in the end of the day, he will use folder structure to define the navigations, and in tabs we will create another _layout
to define the tabs layout inside that folder

## Async Storage

Async Storage is a way to store the data of the client, even though he may not have access to the roaming data, it enables
us to save the data directly on the mobile device.

To do this, we'll add the package

➜ npx expo install @react-native-async-storage/async-storage

This package 

## Data Folder

The data folder is for managing our app data and in this folder we will have the following folders: 

### Hooks

The hooks folder is where we'll create personalized hooks, that are basically the idea of us taking the logic of our
component and separate them from the component, to reuse it.
Hooks are used to reutilize codes. And the idea is to centralize inside a function, that can store inside other functions
that stores all the access to our application backend, and we'll start by creating a hook named useApi.ts
Here we will have two hooks, that are separated from the components, and have as main focus, to be utilized by the components
so that we can have both the local storage data, and make the calls to our api

- useAPI.ts

This hook will concentrate functions to our API backend, the basic thing for this is that we create a constant with the
baseURL of our application, before every fetch, we check if there is a / in the path received, if not, we add one, and
fetch with that path with the node fetch, and return the response, filtered by a function named extrairDados that will
return the json of that response if everything went ok.

On the POST method we'll change the function to be just

const resposta = await fetch(urlCompleta, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: body ? JSON.stringify(body) : null
    })

    where body is one of the parameters received on the function, and the urlCompleta receives the same thing as the GET
    above


- useLocalStorage

This hook will be used to store data from the async storage, on our code, we will call this function passing a key and a
value we want to save, and this will be persisted in the local storage, as well, as retrieved.

But the problem of returning the functions directly, is that many times, for us to manage the state of our app, we'll depend
on these functions, and if any of them is recreated, simply because the code mas executed more than once, this will trigger
an action, that may fetch something unnecessary, we may run an action to update the interface simply because this function
was created one second time, because if it runs this code more than once, it'll create the function salvar again, obterItem
e remover, everytime this code runs.

So we'll memoize these functions to run them only one time and this function will be stored internally in react, so it can
always use it when needed the exact same function and not keep on recreating it, that may lead to an unnecessary function
invocation in our interfaces. And to memoize we need to turn this into a constant and wrap these function calls into an
useCallback


### Contexts

Contexts are used to manage our states, and reutilize the states of our app through the components.

Now, after creating the hooks for the local storage, and the api calls, we will focus our attention in defining a context
class, so we can manage the data of our app, and there'll be a drawing explaining better that idea of managing data, sharing
them among the components, and why this is important and how we'll do in our app.

So the idea of working with contexts is basically separating the state management from the component, and take out of the
component the fact that "he is the owner of that state", because more than one component, can get and update the same state.
There is no problem in a component to have a state, as longs as this state is focused to be used inside that component, or
it will at most be transfered to his child components.

But when we start having the necessity of using those data in different components and "distant" in the components tree,
we can visualize a meaning to store it in a context and this context be disponibilized to everyone.

Every context has a provider, that is what will wrap our whole component trees and will provide exactly this context.

On the context, we are defining an interface as a generic to it, e.g.

interface ContextoEventosProps {
  numero: number
  texto: string
}

export const ContextoEventos = createContext<ContextoEventosProps>({} as ContextoEventosProps)

then we will use it with a useContexto(ContextoEventos), many times we'll do it like this, but there is another option to
it, that is creating a customHook that will change that useContext() to a simple useEventos

in that file we would simply use this useContext, but everywhere we need that context, we'll simply use useEventos()

## Dependency on other packages

We must not forget that we are using as a dependency of our app, the core package, we need to also it as a dependecy in
the package.json


## Event Details Page

The event detail page, differently from the events page, is located in the stack folder, where we'll change a bit how it
is done, so we have an eventos folder inside of stack and inside the eventos we have an [id].tsx file, whese the [id]
will be dynamic passed on click.

The difference between the folder being named as [id] and have a page.tsx inside it, is merely user preference, both will
have the same result

For the routing of the event detail page, as we are working with stacks in the RootLayout, we'll go to that file and create
a new <Stack.Screen> with the name of the routes we are going in, in this case name="(stack)/eventos/[id]". 

## Add Event Via QrCode

so the first thing is that we have a function in our context which holds the events state that when we read a qrcode, this
function will be triggered with that read code, in the function implementation, we are assigning to a constant idESenha
the value of the json parsing of that qrcode.

We are using a qrcode, which we firstly defined in the eventos, the content of it is that it has an id and a password, after
we successfully read that qrcode, we'll do as follows.

The id and the senha are the required data to access the event, and now we are
firstly importing the httpPost from our useAPI hook, we previously created for
accessing the database

So in this function we will pass the eventos/acessar, that is an endpoint on our API, which receives the id and the senha
of the event, this endpoint checks if the id passed exists in a persisted event, and if the senha is equal to the evento
returned column senha. If there isn't an evento, we will exclude the event locally, in case it does not exist.

Now we create a constant novosEventos that holds every event, that does not have the same id as the evento fetched

We push that evento to that novosEventos array, save the item locally as the key eventos using the localStorage function
we created,

Now we are creating a carregarEventos function, where we'll get the eventos array saved in the localStorage, and for each
of them saved on the localStorage, we'll execute the function a carregarEvento function, which will simply check if the id
e senha of the eventos being passed are consistent, and will run the current one on the function
