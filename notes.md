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
