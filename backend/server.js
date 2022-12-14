const express = require ('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleWare');
const port = process.env.PORT || 5000;
const colors = require('colors');
const app = express();
const connectDB = require('./config/db')

connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/employees', require('./routes/employeeRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
