const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");
require('dotenv').config();
const students = require('./routes/studentroute');
const login = require('./routes/loginroute');
const admin = require('./routes/adminroute');
const user = require('./routes/userroute');
const batch = require('./routes/batchroute');
const course = require('./routes/courseroute');
const expensecategory = require('./routes/expensecategoryroute');
const expense = require('./routes/expenseroute');
const payment = require('./routes/paymentroute');
const paymentWithoutToken = require('./routes/paymentwithouttokenroute');
const bodyParser = require('body-parser');

const errorHandlerMiddleware = require('./middleware/error-handler');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended: false}))
// app.use("/uploads", express.static('uploads'))


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port: ${port}`))
    } catch (error) {
        console.log(error)
    }
}


app.use('/createAdmin', admin);
app.use('/api/students', students);
app.use('/api/user', user);
app.use('/api/batch', batch);
app.use('/api/course', course);
app.use('/api/category', expensecategory);
app.use('/api/expense', expense);
app.use('/api/payment', payment);
app.use('/api/paymentrecords', paymentWithoutToken);
app.use('/login',login );

start();


