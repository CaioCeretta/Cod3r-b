# My comments for different things i learn

The folder core is where we will place the core of our application, inside of it, we won't directly access any file, every
file is going to be accessed through the index.ts file, because in the future, this page is going to be moved to another
place in our app, but already anticipating it, we are going to export all the files inside the core folder, through this
index.ts.

The Core folder is completely independent from any framework or library, because it's the core of the business logic of our
application, so we need to learn separating those concerns, because in this way, we will be able to protect those rules from
eventual frameworks changes and things like that.

So in the core of our application, we are going to define some important things, mainly related to the products.

In the core we will create a product folder and a Product.ts, where are going to create the model of the Product utilizing
interfaces.

Here we are creating three interfacs, one file for each, and then we've created an index.ts where we will export a type
that is an object containing those three interfaces, now, on the core index, we'll add this line:
export * from './product'
and everything that has been exported from the product, will be now "reexported" outside of the core file in a more direct
way.

When you have a folder, with many interfaces or many classes, always create an index where you export everything from that
folder

Utilize the interfaces we create on the core folder, to type the properties on other files, such as product

The importance of creating that index.ts on the core folder, and exporting all the interfaces, the constants, etc.
Is that now, whenever we are importing the Product folder, for example. we are just using
import { Product } from "@gstore/core"

We created, inside the components file, a template folder, where we placed the Footer, the Header, and the Page, for creating
the boiler plate of the pages we are going to create and use, then, after we create the header and the footer, the page
component will handle if there is no Header or there is no footer, create an outer div, which will take 100% of the screen
height and inside of it, check if the user chose to not pass a header or a footer, and inside that div, setting as the main
the children of this file as a flex-1, which will make it, take the whole height, except for the header and the footer.

One thing, is going to be created is a group of routes folder, because everytime we create a folder inside our app folder,
this folder will become a route if there is a page.tsx inside that folder, but if we create a group of routes, between
parenthesis, we can create a (pages), we are using this name because ot the pages component that will wrap all of this.
folder. One of the advantages of it, is that we can create a file named layout.tsx,
and in this file we will simply say that everything that is inside this group routes, is going to be enclosed by this page
we created.
Now we don't have to worry about each component to explicility place this page into it. We can do this in each component
with no proble, but at the time we have a group of routes, any thing that is "beneath" it, will be enclosed by the Page.

Let's use the home page as an example. if we go into this page, and remove the Page component, now we are not wrapping up
this component anymore, so if we go into that page, it will not have the header and the footer anymore, but buy moving this
page into the pages group, it will now be wrapped by the page

If we were to add other layout to other pages, than it would have to be, for example (admin) folder in the app, and inside
of it a page.tsx and the layout file, now, for accessing it, it will have to localhost:3000/dashboard/routeName, for ex.

We were used on creating the context and the hooks inside the src folder, but here in this lesson, the instructor is using
the data folder inside the src, to create these two folders.
So in our codes of the business logic, what he normally does is like this:

We have a component in the components folder and a business logic in the core folder, so instead of us accessing directly
the bl from the component, normally, there will be other layers in the middle but one very common layer, that stays very
close to the front end, is a custom hook, which we will to separate  both the state management part and the calls to our
rules. The hook will access both of these things so the component and the core don't talk directly.

Here we created a useInstallment hook, which calls the method calculateInstallment, which is located in our core, this is
a method mostly js, with minimum framework, if needed, and loking for preventing our business classes depending of our
components.

