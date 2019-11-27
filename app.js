const express = require("express");
const app = express();

const morgan = require("morgan"); // morgan lib incoming request log catch
app.use(morgan("dev")); //apply on express

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/order");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);


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




