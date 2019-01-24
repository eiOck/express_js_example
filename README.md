## About repository

Node.js Express example with connection to MongoDB + implementation of functions for User manipulation (CREATE, GET_BY_ID, GET_ALL, DELETE_BY_ID).

### Database as a Service

For database hosting is used [mLab](https://mlab.com/)

### How to run it?

```
git clone https://github.com/eiOck/express_js_example
npm i
npm run start
```

## Requests

In this example of REST API are available 4 requests:

- create new user [POST]
- get user by id [GET]
- get all users [GET]
- delete user by id [DELETE]

### Create new user

[POST] https://localhost:4433/users/

with request body:

```
{
    "username": "some username",
    "password": "some password",
    "email": "some email",
}
```

### Get specific user

[GET] https://localhost:4433/users/{id}

### Get all users

[GET] https://localhost:4433/users/

### Delete specific user

[DELETE] https://localhost:4433/users/{id}
