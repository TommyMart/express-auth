# express-auth

ExpressJS auth with MongooseJs.

- User model
  - username
  - password
  - Roles by ID
- Role model
  - name

## Routes:

- localhost:3000/signup
  - POST
  - username, password
  - create a new user
  - return a jwt
- localhost:3000/login
  - POST
  - username, password
  - checks provided data against database
  - returns a JWT
- localhost:3000/users/:userID
  - requires a valid JWT header
  - gets one user and returns it
- localhost:3000/users/refresh
  - POST
  - requires a valid JWT header
  - checks aa JWT and provides a new one if it's valid
  - returns a JWT
