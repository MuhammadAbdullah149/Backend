// require("dotenv").config({path: './env' })

//import dotenv is new to use , it is in experimental-production , so you have to add experimental script in the paackage.json file at script.dev ,,but the upper line to import dot env is easy to use

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    try {
      app.listen(process.env.PORT || 8800, () => {
        console.log(
          `.. Server is listning on port : ${process.env.PORT || 8800}`
        );
      });
    } catch {
      app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
      });
    }
  })
  .catch((err) => {
    console.log("DB connetion error !!! ::", err);
  });

//old aproach

/*
import express from "express";
const app = express()

(async ()=>{
        try {
               await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

               app.on("error" , (error)=>{
                        console.log("ERROR: ",error)
                        throw error
               })
               app.listen(process.env.PORT, ()=>{
                        console.log(`App listening on port: ${process.env.PORT}`);
                        
               })

        } 
        catch (error) {
                console.error("ERROR: ",error)
                throw err
        }
})()
*/
