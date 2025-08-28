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

  ● Integrate API with loginUser just created

    ○ Beginning steps

      1. Inside app controller, we return back to return a hello world message
      2. Use nest cli in the terminal to create a new module for authentication
        ■ nest g mo auth
          □ nest generate module auth shorthand
        ■ this creates a new module inside src and attach it to root app module
      3. Also, create an auth controller
        ■ move to the auth folder and run nest g co auth --flat --no-spec
          □ With the --flat flag it won't create a subfolder but create it on the same folder as the module
          □ --no-spec prevents the test files from being created
        ■ Inside the controller, create an async login method, where it is going to be marked with the @Post('login')
        annotation, as well as a register method
    
    ○ Create a solution to access prisma so we can access our model/database and the CRUD functions that prisma expose to
    us through the database
      ■ Generate a db module inside our app
      ■ Modify the UsuariosRepositorio created in the root file, to a usuario-mem.repository.ts and create a sample user
      object for testing
    
    ○ We are now going to have to create a valid implementation, with e-mail and password inside the repository
      ■ Inside the login post method, we are going to receive the e-mail and password
      ■ Call the loginUsuario function passing down these two parameters as argument
      ■ When we have named arguments or an object passed as parameter, the advantage is that it becomes clear what each
      argument represent
      
  ● Nest.JS requests

    ○ Post request parameters

      ■ async login(@Body() dados: { email: string; senha: string })
        □ @Body() is the decorar that extracts the request body.
        □ The parameter 'dados' will be exactly the object sent by the client in the body
        □ By declaring `dados: { email: string, senha: string }, we are typing this object in TS to ensure it has exactly
        these two string properties

        □ So if the client makes a POST request with: 

          ```ts
          {
            "email": "example@test.com",
            "senha": "123456"
          }
          ```

          ▢ `dados.email` will be 'example@test.com' and `dados.senha` will be '123456'

           ■ Additional notes on the named params

        ■ When writing loginUsuario(props: { repo: RepositorioUsuario; email: string; senha: string;}) it means that the
        function isa receiving a single argument named props, and that this argument must be an object that contains exactly
        those three parameters.

        ■ Therefore, to calal the function we need to pass an object exactly with those keys.

        ■ In summary we are saying
          □ With props {...} -> we are telling that the argument is an object with these properties.


        ■ Important notes

          □ Nest.JS does not automatically validate types — for that, we need DTOs with class-validator and class-transformer
          □ The type we declare in the parameter is only for TS and does not prevent the client from sending other types
          or extra properties.

        ■ For us to send the req body through the http file, it is going to look like

          ```ts
            POST http://url/folder/request
              Content-Type: application/json

              {
                // body params
              }
          ```

    ○ Token generation

      ■ Install npm jsonwebtoken package to our app
      ■ Within auth controller, import * as jwt from 'jsonwebtoken'
      ■ create the token simply by token: 
  ```ts
          token: jwt.sign(usuario, 'chave', {
				  expiresIn: '15d',
			    })
  ```
      ■ Parameters breakdown

        □ 1st Parameter: payload
          . Payload is the content we are placing inside the token
          . It can be an object, string or buffer
          . In this case, the user object
          . This means that, when someone tries to decodify this JWT, he will be able to see the user data (not encrypted,
          just coded in base64)
          . Payload example: 
            {
              "id": 1,
              "nome": "Caio",
              "email": "caio@email.com",
              "iat": 1693075256,
              "exp": 1694371256
            }
        □ 2nd Parameter: secretOrPrivateKey -> 'chave'
          . Secret key used to sign the token
          . This key ensures that the token isn't falsified
          . Only one that knows this key in the server can verify if the token is valid
          . Normally, this key doesn't stay hardcoded, but in an environment variable, such as
            process.env.JWT_SECRET

        □ 3rd Parameter: options
          . Here we are passing extra options, such as expiresIn
          . In the token payload, this shows as exp in UNIX timestampaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

● Registration 

  ○ The dependencies we installed, such as the bcrypt, are backend dependencies and it is part of the application layer,
  the outer layer, while the auth module has to do with the application rules, if we look into the dependencies we have
  on this package, it has only one, which is a dev dependency because of the build

  ○ Therefore, we don't have the jsonwebtoken dependency, nor the bcrypt, nor any dependency, because in the auth we
  are not worried about these libraries details that we eventually use in our app

  ○ However, inside our registrarUsuario use case, we will need to ensure that we are encrypting the password, becuase
  because in our business, we don't want to have to wait for someone to pass an encrypted password. We want to ensure
  that when we registerUser, the password will be encrypted.

  ○ Since we have this necessity, we are going to have to create some interface, and require that we receive an implemen
  tation of that interface to be able to encrypt this password

  ○ For this, we are going to crete a new interface `ProvedorSenhaCriptografada.ts` with two methods
    ■ 1. criptografar(senha: string)
      □ This methods receive a arwa password, encrypts it, and then return
    ■ 2. comparar(senha: string, senhaCriptografada: string)
      □ This method receives a raw password along with the encrypted one. It then decrypts and compare to the "clean"
      one (they must be encrypted from the same origin)
        □ The reson for this need to be the same origin is that it isn't always the same even if we use the same set of
        characters, because bcrypt inserts an extra "salt" to the encryption, which is essential to security.
        □ Through the "clean" password and the hash generated, even if its not strictly equala, bcrypt knows, because
        of the hash, that it was generated by him

  ○ After the repo creation, we are going to receive this implementation on the register function and in addition to
  receiving the Repository, we re also going to receive this provider

    ■ Now, we encrypt the password using the function we've just created and return it to the repo to save it on the db,
      □ However, since we are in the auth package, this repo will save in memory
    ■ At the end of the function, call `await repo.salvar({...usuario, senha: senhaCriptografa})`

● DDD Aggregate

  ○ 1. Aggregate Concept? 

    ■ An aggregate is a cluster of related domain objects that are treated as a single unit of consistency. It usually
    includes: 
      □ Aggregate Root:  The main entity inside thge aggregate. Only the root of the aggregate is accessible directly
      from the outside. Every external operations must pass through it.
      □ Entities and Internal Value Objects: Objects that belong to the aggregate, but can't be directly accessed outside
      of it.

  ○ 2. Why does an aggregate metter for repositories?

      ■ In Domain Driven Design (`DDD`)
        □ Repositories are used to persist and retrieve entire aggregates
        □ We never persist or retrieve an aggregate internal entity; we always work with the root of the the aggregate

        □ Example: Aggregate based on an order

          Order (Aggregate Root)
            ├── OrderItens (Internal Entities)
            └── EnderecoEntrega (Internal Value Object)

          . We don't access and save the entire Order through the OrderRepository
          . We don't direcrtly access OrderItens through an external repository

  ○ 3. Practical Summary

    ■ An aggregate is a unity of data consistency and business rules
    ■ The aggregate root is the entry point for every external operations
    ■ Repositories always deal with entire aggregates, never with isolate internal entities

● So when to use a Repository?

  ○ What does it mean? 

    ■ The name 'Repository' is generic name that is used for anything. One thing is having a Repository as a generic
    name, and the other is to have the Repository defined in the DDD book
    ■ The repository pattern explained in the book, has to do with this `aggregate` concept, that is a cluster of data
    that is persisted at the same time

  ○ When should it be used? 

    ■ The repository isn't used for everything in terms of persistence, they're not so great when we think about the
    fetching part, on very specific queries, which demand other patterns to help us, without overloading repositories.
    
    ■ And when we think about aggregates, we think, back to the Order and the OrderItens example, that they are persisted
    at the same time, and for each aggregate we have a repository to persist the root of the aggregate, which is the Order.
    
    ■ An order can have items, clients, addresses, and may have multiple other entities, but we want that it to be persisted
    in an unique and transactional manner inside the db

    ■ However, the repositories used in this course is not actually linked to this pattern, it is simply using its name
    since it's a generic name. We are doing like this because, for example, an array is a repository of data, a file, a
    db, and any collection of data can be used as one, and not necessarily entering the pattern details, and other
    concepts of DDD that are not the focus.

    ■ Sometimes we try to "harm" the code so we respect a certain pattern, but sometimes what is missing is understanding
    for which purpose that pattern was created, and sometimes we end up inserting multiple things that don't have anything
    to do with the pattern.

    ■ When we have multiple queries, with multiple different entities, tables, aggregates, junctions and so on, we won't
    use it in a repository, there are patterns for it, such as CQRS — that segregates by separating the commands (updates,
    deletions, and creations ) inside the database of queries, and this could be used

    ■ Repository works very well when these queries are more basic, not advanced queries that work with multiple different
    things.
  