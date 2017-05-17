## TESTING

mocha provides the environment in which to test giving us tools such as before, after, etch and it's asynch

chai gives us the syntax to write like we'd write in factories such as expect, should, etc this is called the assertion library.

## DEPLOYING TO HEROKU with mlab

Change nodemon to node or put in a new script for development and deployed starting.

Create a new database on mlab and then create a user for that database with a username and password. Put this: `mongodb://<dbuser>:<dbpassword>@ds143071.mlab.com:43071/pract_book_db` into a `.env` file as `DATABASE=` or whatever I want to name it. Ofcourse replace the <dbuser>:<dbpassword> with my the un and pw for the database.

In the app.js or start.js file make sure I require this:
`require('dotenv').config({ path: '<name of env file>' });` and dotenv is a module that needs to be installed.

put this:
`mongoose.connect(process.<name of env var file>.< name of database in env var>);`

This will work on the local development but will not yet work on the heroku deployment.

But first we push to git and create a heroku app with
`$ heroku create <name of app>`
`$ git push heroku master`

Once it has been deployed to heroku we can go into the settings and change the config vars to be the same as in the `.env` file.

Restart the dynamos and this should work.

## API keys
instead of using bash profile we can create a env.var profile in the root and use that instead. We can put that in our gitignore file to make sure no one uses it.
such as 'process.env.API_KEY' - this is used if we just want to hardcode it while we are getting it up and running.

- npm hat - this is a module that generates random strings that could be used for api keys.

- JSON WEB TOKENs - this is the way to encrypt an email and username, this seems to be the best way to do it because it is sent in ssl - not exactly sure what that is.

## RESTful routes
I noticed when creating the RESTful api routes the mongoose db commands take different values. For instance:
`const id = req.params.book_id;
Book.findByIdAndRemove(id)`

## DATABASE functions
This wouldn't work when I put the req.params.book.id directly into the method, but it would work when I assigned it to a const and then put it in there. I don't really know why this made a difference. Here's some of the documentation from the the mongoose website:

`Issue a mongodb findAndModify remove command by a document's _id field. findByIdAndRemove(id, ...) is equivalent to findOneAndRemove({ _id: id }, ...).`

Also, it said that it can take an object, string, or number.



#GUIDE TO STARTING PROJECT

1) $ yarn init - to create package file
2) $ express --view=pug prac-exp-app - to create express app
  - or --view=ejs
3) $ yarn add nodemon - to install automatic restart of server upon change of file
  - change package.json: `"start": "node ./bin/www"` to `"start": "nodemon ./bin/www"`
4) $ yarn add eslint --dev - to install and config js linter
  - $ export PKG=eslint-config-airbnb;
  - $ npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  - $ .eslintrc
    - in the root of project
    - into .eslintrc file: `{
          "extends": "airbnb",
          "parser": "babel-eslint",
          "env": {
            "browser": true,
            "node": true,
            "es6": true,
            "mocha": true
          },
          "rules": {
            "valid-jsdoc": ["error", {
              "requireReturn": true,
              "requireReturnType": true,
              "requireParamDescription": true,
              "requireReturnDescription": true
            }],
            "require-jsdoc": ["error", {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": true,
                    "ClassDeclaration": true
                }
            }]
          }
        }`
  - $ yarn add babel-eslint --dev
    - not sure if I had to install this or to restart atom.
5) $ yarn add jest --dev - to install testing for node
6) $ yarn add mongoose - to install ORM for mongodb
  - $ sudo mongod - this will start the mongodb


##EXTRA
- $ yarn add slug
