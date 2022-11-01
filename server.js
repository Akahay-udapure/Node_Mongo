const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect("mongodb://localhost:27017/Node_Mongo", (err, res) =>{
    if(err)
        console.log("Connectivity error", err);
    else
        console.log('Database connected successfully');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes);


app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
