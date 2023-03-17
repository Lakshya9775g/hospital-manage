import express, { Router } from 'Express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' 
dotenv.config()

import routes from './routes/routes.js';

const app = express(); //server creation



const DB = process.env.DB_LINK;
const port = process.env.PORT || 8080;

app.use("/home", routes); //middleware

//Data base connection
mongoose.connect(DB)
    .then(()=>{
        console.log(`connection to db sucessful`);
    }).catch((err)=>console.log(err))




//server listing to the port
app.listen(port, ()=>{
    console.log(`Server is running on Port no: ${port}`);
})