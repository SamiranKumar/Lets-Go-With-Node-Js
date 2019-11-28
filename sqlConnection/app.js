const express = require("express");
const mySql = require("mysql")
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



const connection = mySql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"shpoDb"

});
/* 
connection.connect(function(err){
    if(err){
        console.error("DB Connection :"+err);
    }else{
        console.log("DB Connection Success!");
    }
});
 */

 connection.connect();

 connection.on("error",function(err){
console.error(err);
 })