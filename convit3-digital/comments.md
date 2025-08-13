# Workspaces

Here we are going to make our code, in a way we have a packages folder, outside of our apps, and our apps folder that are
going to the contain all of our apps, such as the front, back and mobile codes. Then, we'll have a package.json outside
of both these folders where we'll install a package named

## What we'll need to achieve this

1. npm-run-all: package that will be used to execute multiple scripts in parallel.
2. "workspaces" property on package.json: On this property we are going to say that everything inside the apps folder and
and the packages folder, are managed projects inside the same workspace
3. On our front end, we have a script named dev to run the project as development and with the --turbopack, and inside the
back end we have a script named start:dev, so to standarize these scripts, we'll rename it to dev inside the backend.
4. Now with both scripts modified, inside our root package.json, we'll create a script named dev:frontend which will cd to
the frontend folder, and run the run dev script, and create another script for the backend, just as did for the frontend
5. After creating both of those scripts, we'll create another one with this content
"dev": "npm-run-all --parallel dev:*" or "dev": "run-p dev:*" and this is going to basically say: "Execute in parallel all
the dev scripts"
6. Now, on the terminal, inside our root folder, we'll run a npm run dev and it will run both commands as expected.

One other thing, in later classes, we did a change, dev:front and dev:backend are now apps:... because we want to, first
run the build of our core script and then, our apps, so it will now be

"dev": "run-p packages:core apps:*",

Now, we will see, that the core package, we are using in the frontend, does not know about the existence of it, so we
need to say that, on the dependencies, the name of the package, in this case, "core", is one of the dependencies of the
front end package, and the same thing will be done on the backend, then, afterwards, we'll run a npm i on the repository
that wraps everything. Now, we simply, where we were importing something from the @/core folder, we import from the package
core


## End

We could also utilize the turbo repo, but if we don't want to use another library, one more structure, we can simply go
creating the folders in the way we want to, and just place the folders inside the workspaces on the package.json.