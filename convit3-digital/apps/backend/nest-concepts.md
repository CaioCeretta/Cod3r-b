# Nest Concepts

## Commands

In the nest cli, we can run many commands that help us to deal with our app, such as nest generate module, nest generate
component and so on. and here i'll list one of the important commands and flags that are being used in the development of
the project.


flags: 

--flat: By using this flag, with a nest generate controller name --flat, we are saying that we want to generate the
controller directly inside the module folder, and not creating a subdirectory

--no-spec: Don't create the spec file to this controller

## Modules

When we generate a module via the cli, it will create a folder for the module that has just been generated and the module
folder will have many resources that are encapsulated or hidden in this module.
The idea of creating a modularized app is exatcly for us to have a more difficulty to estabilish many dependecies in these
files. One thing that measures the quality level of an application is the level of coupling, the more coupled an application
elements are, the harder it will be to maintain the application.

One good example for us to understand this, is using as an example, a 5km race where me and 9 other friends are going to
participate in it, and we have two strategies for it, or each person run independently or everyone runs with their hands
in hands. Which strategy we think that will work out the best? If we choose the second option, the coupling level will be
high and everyone will be much slower than running independently. Of course that in one application we can't make every
file to be independent of one another, because we need to have the relations between those files, but we need to understand
that the bigger is the coupling, more levels of relationship between our modules, harder it will be to maintain.

So the idea of modularization. is that inside of each module, we create a series of resources that will be visible only to
that module unless we explictly declare that this resource will be visible outside the module.

## Controllers

In the example above we've just created the eventos module, changed to its folder, and executed the command to generate a
controller with the --flat flag, which means that it won't create another folder, but place this controller inside the
folder where we are.

And now that we have our controller, its through the controller that we are going to map our end points inside of it, the
urls of our api to then, we start integrating it with our frontend. 

## API End Points

and endpoint is created as, every method can be used to here,

on methods that require body arguments, 

@MethodName()
async functionName() {
  // Code for the method
}

The first endpoint we created is for the eventos controller, a @Get(), an empty parameter means that we don't have a specific
name for that, so it will be reached with the url/eventos, then, we are simply returning the eventos we have on our constants
inside core folder

## Endpoints with decorators

Now we'll create an api end point, that fetches an 'evento' based on its id or alias, so in this case we will create a function
but in this case, we are passing as a parameter the 'idOuAlias' and mark this method as @Get(':idOuAlias') and on the parameter
we pass a @Param('sameNameAsTheGetParameter'), and after that decorator, we are saying that the url will have a parameter,
based on the : in the @Get(':idOuAlias') that will be modified according to our url, and then, pass that as a parameter to
our method. and we'll call the method with the get params e.g.

GET http://localhost:4000/eventos/evento-fullstack

## POST Endpoint

For the post endpoint, we'll need to receive and pass the parameters in the body, the first change is on the end point, it
should be something like this

  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    ...
  }

  in this case we don't pass any dynamic value to the @Post decorator, and on the function parameters, and the data we
  are receiving in the body, we are naming it based on the @Body()
  and on the post method, we'll do it like: 

  Beneath the POST endpoint, we'll set the endpoint as application/json, then, we'll pass the required data to it, e.g

  POST http://localhost:4000/eventos/acessar
  Content-Type: application/json

  {
    "id": "0da054a5-91ef-4ad6-ae2f-bd30ba0f5f0d",
    "senha": "senha123"
  }

## Db, Injectable, Global

To start integrating our prisma db, we'll generate a new module, named db.

Inside this db module, we will create a provider for prisma, and on this provider we will extend the PrismaClient and implement
the methods to deal with the lifecycle of this class, so it will implement the onModuleDestroy and the OnModuleInit.
Inside this object, we'll say to connect to the db, whenever this component is instantiated, and disconnect whenever it stops,
we are doing this because we want all the behavior to be done by the framework, so who is instantiating and who is destroying
the class, is the framework, so basically we'll have the framework managing this lifecycle

We'll also say that it is @Injectable() and @Global(), because we want to inject that provider in another classes
and want it to be available globally.

Then we'll need to do some changes for, starting from our event module, we'll be able to access this prisma class we just
created.

To do this, inside our db.module, we'll export the PrismaProvider, so it's not enough for us to just create the class, but
we need to explictly say that this SHOULD be visible outside the module and that's why there is this modularizing idea
inside next, because this way, it helps us to protect the code to not be used in an improper manner in another folder of
our app, but when we say that we're creating a module or file, and this file will be visible to the outside, we are saying
that other codes can depend on this file.

Now on our eventos module, we need to say that we're importing this other module, because the db module, exports the prisma
provider and in nest the communication is between modules, a module depends on another module.

Now, as the last step, we will create another provider named eventos.prisma, inside the eventos module folder, and inside
it, we'll say that this is injectable, and in the constructor, it will have an object as a readonly prisma of the type Prisma
Provider, now, whenever we call prisma, it will know that we are talking about that class, and we will be able to run commands
to communicate with the DB

## Integrating our backend app with our database

To do so, we'll utilize this Evento.Prisma class, so because this class, is an injectable class, the lifecycle management 
of this class will be done by the framework, the framework will be the one to create this class, and pass this class as a
parameter to our controller, will be the done from it, so we do not need to worry about it.

The only thing we need to do is, on the EventosController, that one of the parameters of the constructor is

constructor(readonly repo: EventoPrisma) for the controller to understand that this class is required for our controller
and pass it through. Now, we need to simply change the behavior of our methods by saying that they will use the repo constant
to make the db comm.

## Error Filter

Here, in the root of our src, we created an error.filter.ts, in this file we'll export as default a class named ErroFilter,
which will implements an ExceptionFilter that comes from nestjs/common, and we will use a decorator named @Catch, that also
comes from nest, and we'll pass exactly which error that we want to handle.
So to start, we will use a generic Error for the @Catch() decorator, then, we will implement the required function when
we implement the ExceptionFilter, that is a catch, which receives an exception and a host. The exception is the error we
are getting, and the host are the arguments we can get, like the request and the response.
After we create the context, and get the request and response from that context, we are going to get the status of the
exception. That in the end, we check if the exception has a status, otherwide its 500, and we return the response the
statusCode, the time, where did this error originate, and the message of the exception.

Now we need to register this filter inside our main.ts, so we'll add an app.useGlobalFilters(new ErroFilter());
to it.

But there are other options to this, we could simply, where we throw the error, instead of using the Error class, we could
use the HttpException that nest offers us, but there is another addendum regarding this function, we must not use the Error
offered by Nest, in our business rules, because the ideal is that we isolate as much as possible our business rules, so it
won't be tied to nothing.





