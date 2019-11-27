const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
   
    res.status(200).json({
    message:"Handling GET Request to Product"
    });
});


router.post("/",(req,res,next) =>{
    res.status(200).json({
        message:"Handling POST Request to Product"
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

module.exports = router;