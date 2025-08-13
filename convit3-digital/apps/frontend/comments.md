# Comments on Front End

## Children

children as a prop is a special property in react that represents the conbtent between the opening and closing. This could
be a React Element, a string, numbers, etc. Or multiple children or null or undefined if the children's aren't provided

When we access the property children, which is a react node, in fact, for the component receiving what's inside it's opening
and closing tags, are is in fact, an array of elements, so if we did something like

<TagExample> 
  <div>Children 1</Children1>
  <div>Children 2</Children1>
  <div>Children 3</Children1>
</TagExample>

and we receive, in the TagExemple, one property named childre: any or children: ReactNode, if we console.log(children)

we'll receive [<div>Children 1</div>, <div>Children 2</div>, <div>Children 3</div>,]

so we can also do a for inside the childrens, such as

for(let i = 0; i < children.length; i++) {
  console.log(children[i])
}

we would get those exact values.

If there is only one child, children will not automatically be an array, instead, it will be the child itself,.

## Steps

So the Passos component was an example of how the logic above works, so it was used for something like this:

In the component, we expect to receive one property named "permiteProximoPasso", which is an array of booleans, and for
this property, in the parent component which calls this component, we started passing "permiteProximoPasso={[true, true, false]},
and another property named labels, which will have an array of string

now in this component, we have a state "passoAtual", what will set the current step when the person clicks on the next and
previous buttons, something like

return passoAtual === 0 and semProximoPasso return passoAtual === props.labels.length - 1, then we we'll have a function
to handle the steps change, if there is a next available step or not.

Now, we will also have a constant named

const permiteProximoPasso = props.permiteProximoPasso?.[passoAtual] ?? true;

because the passo atual is a boolean state, and we passed the permiteProximoPasso as an array of  boolean values, what will
determine, if it's true or false, is, e.g

permiteProximoPasso = [true, true, false]
if passoAtual === 1 and permiteProximoPasso.[passoAtual], this will be true and the person can go on, if passo atual is
2, it will be false, so the person will not be able to go on

This is one interesting way of achieving this, now on the false place, we change it to a logic, that will determine if it
is true or false.

## CampoEntrada Component

One other interesting thing done, was that we have a component CampoEntrada, this component is basically a container for
the inputs

it receives in the props, a label; value; descricao; observacao; erro and one onChange, than on the FormEvento where we call
the Passos, we also call the CampoEntrada, in the FormEvento component, we receive the event, the function to save an event,
onde to determine if the alias is valid, and one other property to update the event.

On the context, whenever the event.alias change, it fires an useEffect, that if one alias is present, it will trigger the
validarAlias function, what this function will do, at first it will call the backend and check if there is already an event
with that alias and that id stored in the db and set the alias to the evento state, for true or false, then on the component
on the value it receives as props, we are passing it with a function we have on the core folder, which is shared by all 
components, named formatar, and it'll take any blank space, uppercase characters, and transform it to a way the db wants
so 'React Native Course 2024' will turn out to be 'react-native-course-2024' automatically.

And all the changes we are making, are on the state from the context, so every property we check, such as evento.alias
or evento.data, and changes on these values, are made directly to the context we are retrieving from the useEvento

## Area administrativa do evento

Here we had one curious thing, inside the dynamic page inside the admin evento page, we have a state for the senha, a setter, for the senha, aswell for the evento  and the guests.

This page works by, if there is no event, there is a form for us to input the password, where we'll pass as props the senha
state, the setter, and the function to access the evento, if we pass a senha, that will be past for the parent to fire a
API call to check if that senha is related to some event, if yes, it will set the evento, reload the page, and then, if
there is an event, a dashboard for that event will instantly open

## Use

In our dynamic page, we added the constant

const params: any = use(props.params)

The use keyword is used in React Server Components (RSC) to resolve async values within a React component. It allows you
to work directly with asynchronous data inside components, instead of managing the resolution with hooks like useEffect
or explicitly using .then() in functional components.
We'll use it when we need something to be fetched or generated dynamically, and `use` can ensure us that we can safely
access a resolved state.

Without use, react will require us that we explictly handle asynchronous behavior, so for example

const params = await props.params;
return <div>{params.alias}</div>;

The use function simplifies this by letting you directly work with the asynchronous props.params inline, like:

const params: any = use(props.params);

So in our example, props.params is assumed to be a promise (or async source)

use(props.params) ensures that params contains the resolved value of props.params before proceeding.

So we'll usually opt to utilize the use when we are working with react server components and the data we need is asynchronous.

If props.params or other data sources in our component, return a promise, we can `use`them directly without needing extra
state or lifecycle management

if we are not using rsc, or we don't need to resolve promises inline, we tipically wouldn't use the use. 


## Componente SimNao explicação

Here is an example of a component call:


``ts
<CampoSimNao
          label="Presença Confirmada?"
          value={props.convidado.confirmado ?? true}
          onChange={(valor) => 
            props.convidadoMudou({
              ...props.convidado,
              confirmado: valor
            })
          }
          className="flex-1"
        />
``

First, the value being passed corresponds to props.convidado.confirmado, where convidado is stored in the context. The
SimNao component renders two <span> elements, each triggering a call to the function that updates the state of the convidado.
These act as two buttons, one for true and another for false, depending on what the user clicks.

A function named renderizarItem will be created, with a boolean parameter. This function will return a <span> where the
onClick event will call the onChange function, which in this case is alterarConvidado, passing the clicked value. If the
user clicks on the "true" span, it sends true to onChange, and if they click on "false," it sends false. The content of
the span will simply display "true" or "false."

When the user clicks a button, for example, with the value false, it sends this value to the parent component. The onChange
return will carry the value false. If false is received, the root state will be updated, indicating that the convidado in
the context has confirmado set to false. This change will automatically update props.convidado.confirmado to false as well.
