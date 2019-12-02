const express = require("express");
const app = express();

const morgan = require("morgan"); // morgan lib incoming request log catch
app.use(morgan("dev")); //apply on express


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/order");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req,res,next)=>{
    const error = new Error("Not Found!");
    error.status =404;
    next(error);
});


app.use((error,req,res,next)=>{
   res.status(error.status || 500);
   res.json({
          message:error.message
   });
});

/*  app.use((req, res, next) => {

    res.status(200).json({
        message: 'Request Success!'
    });

    switch (res.status) {
        case 200:

            res.status.json({
                message: 'Connection Ready!'
            });

            break;


    } 

    checkResponseStatus(200);
     res.status(200).json({
         message: 'Connection Ready!'
     }); 
    next();
});

 */



/* 
function checkResponseStatus(statusMessage) {
    console.log("statusMessage:" + statusMessage);
}
 */




module.exports = app; //app.js apply for public access modifier




