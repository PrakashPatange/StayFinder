const express = require("express");
const router = express.Router();

//index - users
router.get("/" , (req,res) =>{
    res.send("Get for users");
});

//show - users
router.get("/:id" , (req,res) =>{
    res.send("Get for show user id ");
});

//post - users
router.post("/" , (req,res) =>{
    res.send("Post for users");
});

//delete - users
router.delete("/" , (req,res) =>{
    res.send("delete for users");
});

module.exports = router;