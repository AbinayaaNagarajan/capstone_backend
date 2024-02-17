const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
// Requiring and configuring the .env file to access its variables 
require("dotenv").config()

// Creating the express server and storing inside the app variable
const app = express()
// Port in which the server will run on 
const PORT = process.env.PORT || 3000

//connect to MongoDB

mongoose.connect('mongodb+srv://abinayaanagarajan:v35nnj1mqR9hpV0Q@cluster0.yx8fcpp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser : true, useUnifiedTopology: true});

const cors = require("cors")

// Configuring the server to accept and parse JSON data.
app.use(express.json())

//Middleware

app.use(bodyParser.json());
app.use(cors());
//Routes

const studentRoutes = require ('./routes/studentRoutes');
app.use('/students', studentRoutes);

const attendanceRoutes = require ('./routes/attendanceRoutes');
app.use('/attendance', attendanceRoutes);

const signupRoutes = require('./routes/signupRoutes');
app.use('/signup', signupRoutes);

const contactRoutes = require('./routes/contactRoutes');
app.use('/contact', contactRoutes);



// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})