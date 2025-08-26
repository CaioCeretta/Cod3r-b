## Nest and Backend comments

  ● Why Nest not express? 

    ○ Nest has an advantage over express. It uses express under the hood, however it automates many processeses and even
    though it has concepts for us to learn, it ends up being easier than to make everything "by hand".

    NestJS is a Node.js framework built with ts and provides a structured way to build scalable and maintainable server-side
    applications. It follows a modular architecture heavily inspered by Angular, making use of MVC concepts, where control-
    lers handle incoming requests and responses, services (or providers) contain the business logic, and entities or models
    represent the data layer, often managed through an ORM like Prisma.

  ● Database ORM

    ○ For the project, we will use prisma since its developing experience is good, even though its a newer ORM than other
    market options, it can attend what we need

      ■ npx prisma migrate dev reminder: When running this command, initially, it will create a .env file with a DATABASE_URL
      key simply saying a db file will be created as a file, and where our this dbfile is going to be stored.
        □ Along with this, it will run the migration created on the db and prompt the name for us to insert the update we
        just did, for example, in a user creation we name the migration as 'criar tabela usuarios', for example, to store
        this change.
        
      

  ● Centralize a single access point in the front-end

    ○ In the front-end, the instructor likes to create, in the front-end folder, a .env, insert a variable NEST_PUBLIC_API_URL
    and assign the API address to it, and create a custom hook of useAPi, where in this file, we are going to center all
    API calls in our app, like:
      
      ```ts
        export default function useAPI() {
          async function httpGet(url: string): Promise<any> {
            const req = await fetch(`${BASE_URL}/${url}`)
            const dados = await req.json()
            return dados
          }

          return {
            httpGet
          }
        }
      ```

    And create all requests to go through this file

      □ Now on our context we can call
        `httpGet()

  ● Backend Init

    ○ In the backend, we are also going to import the authentication and the core package of our app, just like the in
    front end
    ○ Run npm install on the root folder of the node packages
    ○ Add dev/backend script to package.json
    ○ Create a backend/http/users.http to place the users rest test calls

  ● HTTP Calls

    ○ One thing we will notice is, if we try to insert an user through a simple route, such as the getHello, and return
    the user to the client, it will work because http routes can access interfaces, but not functions, so if we try
    to call a function from an http route, such as loginUsuario, passing a repository and the required parameters, it
    won't work as expected 

    ○ Nest.JS have some problems when dealing with ECMAScript's import  and export, so to fix this, we need to make some
    changes to our packages to build them through a tool called tsup

    ○ Changes to fix NestJS problems with imports and exports

      ■ To do so, where we have the main attribute, inside the package.json, we change it to "dist/index.js", add the
      tsup devDependency
      ■ Create a types attribute with "dist/index.d.ts"
      ■ Together with the dev script of "dist/
      ■ Add these 3 scripts to the package.json
        □"build": "tsup src/index.ts --dist --minify",
        □"build:packages": "tsup src/index.ts --dts --minify",
        □"dev": "tsup src/index.ts --dts --watch"
      ■ Replicate these changes to the auth package
      ■ Inside the root package.json, create scripts to run dev scripts from auth and core, which will run the tsc command
      to the index.ts and update the dist/index.js








  


    

