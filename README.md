# CFA Practice Express & MongoDB

A very basic app to practice coding routes, middleware, names spaces, api routes, and authentication of api user. There is an online version available here: https://cfa-prac-mongodb-deploy.herokuapp.com/ This database service is provided by mlab. I use RESTful design.

## Usage

Either clone or download the application and run:

`$ npm install` or

`$ yarn install`

### API useage

To test the use of the api routing a JWT is required. Here is a JWT provided for experimentation purposes:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5Aam9obi5jb20iLCJpYXQiOjE0OTUzNDI0ODJ9.7T2rSEci75f7US39xgi6gk439yMYA0sqtrSjQyRR9oQ`

The api address is:

`https://cfa-prac-mongodb-deploy.herokuapp.com/api`

To use the key add `?key=` to the end of the url and add the above key after the equals. This will give access to the GET and POST action which will list database entries and creating database entries. To access PUT, DELETE, and individual GET use the following url:

`https://cfa-prac-mongodb-deploy.herokuapp.com/api/:book_id`

The `:book_id` is the database id for the record with PUT being able to update the record, DELETE removing the record, and GET finding and displaying the individual record. For authorization purposes the JWT must be put after `:book_id`. To update a record with a PUT request place the queries after the JWT. A put request will look like this:

`https://cfa-prac-mongodb-deploy.herokuapp.com/api/:book_id?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5Aam9obi5jb20iLCJpYXQiOjE0OTUzNDI0ODJ9.7T2rSEci75f7US39xgi6gk439yMYA0sqtrSjQyRR9oQ&title=whatevervalue&author=whatevervalue&description=whatevervalue`

Broken down into the component parts it'll look like this:

- Server name: `https://cfa-prac-mongodb-deploy.herokuapp.com/`
- Directory name: `/api`
- Record identifier (params): `/:book_id`
- JWT: `?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5Aam9obi5jb20iLCJpYXQiOjE0OTUzNDI0ODJ9.7T2rSEci75f7US39xgi6gk439yMYA0sqtrSjQyRR9oQ`
- Query params: `&title=whatevervalue&author=whatevervalue&description=whatevervalue`
