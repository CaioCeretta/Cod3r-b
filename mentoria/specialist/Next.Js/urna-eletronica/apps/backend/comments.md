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

  ● 



  


    

