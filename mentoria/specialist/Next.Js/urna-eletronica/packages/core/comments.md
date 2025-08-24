● Authorization and Authentiication

  ○ Create a user folder and, within it, a `model` folder and a `service` folder
    ■ The model is going to contain the User model
    ■ The service will contain our use cases   
    ■ First, we will create the code in a simpler way, without a database, and later on we'll refactor it.
    ■ In a larget project, the instructor prefers to store the password in a different model, because if we store it inside
    the `User` model along with other information, and perform the "famous" select * from table, the password will also
    be retrieved and travel through the app unnecessarily.
      □ We only need the password in specific moments, and it is much more sensitive data than other user information.
      □ Fetching it unnecessarily increasses the risk of exposure, so it's more interesting to keep the password in a
      separate folder than than inside the `User` table.
      □ To do this, for example, we will create another `Auth`  package inside our packages folder
    ■ When we use the core/auth/backend as a dependency of front end, for example, we will then see in our node_modules
    that it now has a folder with all the folders and codes we written in that separate project, we can also see a small
    arrow on the side of the dependencies from the monorepo, because it is pointing inside the project

  ○ Auth Package

    ■ Initialize the package.json, name it @urna/auth, and this package will only be used to deal with our project
    authentication and propritize the separation of concerns idea
    ■ Other useful idea is to create "physical delimitations", because by placing everything inside one project, it is
    easier for us to start creating multiple dependencies that should not exist
        □ When we physically separate it, by creating a separate project, this does not happen
        □ Nwow, the same way we depend on core package, inside frontend, we'll depend on the authentication

● Project Configuration

  ○ Our frontend can easily access what was defined as a dependency of the packages (auth and core). But the backend, won't
  be able to access them, it won't find the same classes.

  ○ In the core package, on our application rules, because we are able to implement multiple solutions, without the need
  of having a database, or framework. We can focus part of our programming effort into codes that are independent of
  libraries/frameworks or databases.

  ○ In the auth/usuario/service package folder, we implemented a `loginUsuario` feature that is using constant's user
  that comes from the fixed array of the auth application

  ○ This means that our use case depend on a certain way of the persistence mechanism, we may think that there is no persistence
  mechanism, just a list of users, but there is a direct dependency from the login to the place where the data is stored.
  And we can change and invert this logic 

   


