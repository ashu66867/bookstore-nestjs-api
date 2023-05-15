require('dotenv').config();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const app = express();                 // Express server instance


/// Middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


app.listen(PORT, function () {         // Listening on PORT 5000
    console.log(`Server is running on port: ${PORT}.`);
})

/// DB Connection
mongoose.connect(DB_URI, { useNewUrlParser: true }).then(ConnResponse => {
    console.log("MongoDB Connection is sucessfull !")
}).catch(ConnError => {
    console.log("MongoDB connection failed !!!", ConnError);
});

const loginRouter = require(__dirname + '/routers/router');

app.use(loginRouter);       // Login, Register and forget password routes
