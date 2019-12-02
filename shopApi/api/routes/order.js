const express = require("express");
const router = express.Router();

router.get('/',(req,res,next)=>{
    
    res.status(200).json({
        message:"Orders were Fetch!"
    });
});


router.post("/",(req,res,next) =>{
    res.status(201).json({
        message:"Orders was Created!"
    });

});


router.patch("/:orderId",(req,res,next) =>{
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