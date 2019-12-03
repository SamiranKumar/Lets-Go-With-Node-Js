const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
   
    res.status(200).json({
    message:"Handling GET Request to Product"
    });
});


router.post("/",(req,res,next) =>{
const product = {
    name: req.body.name,
    price: req.body.price,
}

    res.status(200).json({
        message:"Created Product",
        product:product
    });

});


router.patch("/:productId",(req,res,next) =>{
    const id = req.params.productId;
    console.log("productId:"+id);
    res.status(200).json({
        message:"Update Product"
    });

});



router.delete("/:productId",(req,res,next) =>{
    res.status(200).json({
        message:"Delete Product"
    });

});



const fs = require("fs");


function readData(){
    var data = fs.readFileSync("data/word.json");
    var word = JSON.parse(data);
    console.log(word);
}


module.exports = router;