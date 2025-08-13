# Gamer Store App

## Most important rule passed by the instructor

Defining all our business rule inside the core of our application, is essentiall for us, we will be able to test all the
rules in a better way, there isn't any possibility of us mixing the rules with state management, with specific features
of the framework, and is very important for us to make this separation clear, of what is business rule from our technologies,
frameworks, and everything we'll manage in our applications.

 

## What is Turbo Repo?

A monorepo, is basically a collection of many different apps and packages in the same codebase, the alternative setup 
would be a polyrepo and that's where we will have multiple code bases, which are published and versioned separately.

Imagine we have three different repositories, one for the app, one for the docs and one for a shared utility package, be
it, for example, a shared UI package that's used both in the apps and the docs kind of repositories, or it can be shared
configs. And when we want to make a change in the shared utility that's used by app and doc, we'd need to publish that
change to npm and then need to update the app and docs and bumup the version in their dependencies and then make a commit
so our apps are now synchronized with the new feature in this shared utility.



If we want to do the same thing as above, but in a monorepo, they would all live in the same single codebase, so we would
make any changes that we want to the utilities and then it's already been shared between the apps and the docs, and that's
all we need to do, they are not depending on a specific version of this shared ui, they're just depending on the local version
in that same code base. 

The main building block of a mono repo is workspaces, each application and package we build will be it's own work space...
A workspace is basically a folder containing a package.json file, each workspace can declare its own dependencies, they can
depend on each other, they can export code for the other to use and they can have their own scripts. 

For example, if we are using pnpm as our package manager, in the package.json for our documents, or docs app, we will
declare a dependency on the "shared.utils" with the value of "workspace:*", this is how we would denote that this is a 
local library or package in our workspace. If we are in yarn or npm value wound only be *.

On top of the wor spaces we would have in our applications, there is a root workspace which will be containing all those
packages and apps together, and this is a good place for us to specify dependencies that are present across our entire
monorepo, such as tasks that belongs to the whole monorepo as opposed to individual workspaces.



Now we are using turborepo,turbo repo is a high-performance build system designed for managing monorepos. A monorepo is a
single repository that holds the code for multiple applications or packages, rather than having a separate repository for
each project. This setup is often used in large-scale projects or teams that maintain several related apps or libraries, such
as frontend and backend services, or different modules in a larger project.

It's optimized for monorepo workflows by providing faster builds, caching and dependency management, here are some key features

In short, Turborepo optimizes and simplifies working with monorepos, making large codebases easier to build, test, and maintain.
It’s especially useful for projects involving multiple apps, services, or shared libraries.

## Project Explanations

The first thing we did in this project, was to pass our front end to the gam3r.store apps folder, where we will place the
frontend, the backend, and the mobile.
We then created a new script in our package.json, which is simply dev, it will be a copy of the start:dev script and now
if we run dev, directly from the root of our project, he will both start the front end, aswell as the back end at the same
time, if we had it in two separate projects, we would have to run one script of the frontend, and then run the script
of the backend, opening two terminals two run each one of them, but here we will need only one command.

By running yarn run dev, in the root, we will see on the terminal and be able to navigate for each application that ran.

The run dev script will run our core package, but we are also going to create a package we are going to reutilize both
on the frontend and the backend projects, this package that will be common to both projects will be placed inside that
packages folder.

Packages folder outside of the apps, inside of it we'll create a core folder, and inside of it will have a jest.config
a package.json and a tsconfig.
Inside of package.json we'll have a build script, and will run the project based on the compiled project of the dist folder
that is going to be the folder the project will go when compiled.

Now we'll create a src in the core folder, and place everything we have inside the frontend core, because now we will have
a problem as soon as we delete the core folder from the frontend, but the same code is in another place, which is the packages
folder.

Now we are going to make our frontend project, to depend on the this other project folder, and this folder, depend on the
frontend. But one important thing to notice is that we are using the tsup that will help compiling our code from typescript
to javascript, and will also monitorize it, using the watch mode

Because we have several new dependencies, such as tsup, we'll run a yarn install and everything we need, now we can run
the command yarn run build, now we're going to have an error on the frontend build, because it is importing files from
the core folder, which now, we don't have anymore.

So everywhere we have @/core well change to @gstore/core, this is the name we are using on our package.json of the core
located in the packages/core/src/package.json, this is going to be our shared name for everywhere, so for it, we have
to declare as dependency of our front end project, a dependency of "@gstore/core": "*", because now the frontend will
look in this dependency as it is a node package we are used to install in our app, in the backend project, we also need
this dependency.

Now we run the yarn install again, and turbo rebo will look at this dependency not on the remote repository inside node_modules
but inside our project, now we'll have these internal links between the projects.

Now by successfully running the build, the front end build is already accessing the shared data in the package and the
backend also has access to these data/libraries, and now we indeed separated what is the core of our application from that
which is frontend, and the same to the backend.

## Database

One thing we need to be aware of, is that we're not working with absolutely nothing related to db in the core part of our
app, we're working with it specially on the backend, it doesn't make sense for us to work with databases outside of the
backend

For us to import prisma with NestJS, we are simply doing as the db provider, where we create the provider class, extend
the prisma provider and implement the methods onModuleInit and destroy so we can handle the lifecycle of the db.

Basically the db module has the PrismaProvider which extends the PrismaClient that will disponibilize for us the class
that will help us to access the db, and do everything by the prisma client. And by it being an @Injectable, we can inject
him in every file of our code.


For us to initially seed a db we create a seed.ts, create a function seed where we will create many rows for a
specific table and run it with npx prisma seed and then create a new attribute in package.json named prisma
to tell where it will find this file when we call the npx prisma db seed.

"prisma": {
        "seed": "ts-node prisma/seed.ts"
}

after the last property

then call on the terminal with npx prisma db seed







