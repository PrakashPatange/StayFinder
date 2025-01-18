const express = require("express");
const router = express.Router();

//POSTS
//post - index
router.get("/" , (req,res) =>{
    res.send("Get for posts");
});

//show 
router.get("//:id" , (req,res) =>{
    res.send("Get for show posts id ");
});

//post 
router.post("/" , (req,res) =>{
    res.send("Post for posts");
});
//delete 
router.delete("/" , (req,res) =>{
    res.send("delete for posts");
});


module.exports = router;
