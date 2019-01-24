import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './src/api/users/user.controller';
import connect from './config/db';

// initialization of express 
const app = express();

// connection to DB
connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// adding user endpoint -> localhost:4433/users/...
app.use('/users', userRouter);

// port setup
const port = process.env.PORT || 4433;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
