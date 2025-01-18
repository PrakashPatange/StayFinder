const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const session = require("express-session");
const flash = require("connect-flash");
const path =require("path");
// const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



const sessionOption = {
    secret: 'mysupersecretstring', 
    resave: false , 
    saveUninitialized: true,
  };

app.use(session(sessionOption));
app.use(flash());

app.use((req,res,next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req,res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    
    if(name == "anonymous") {
        req.flash("error", "User not registered");
    }else {
        req.flash("success", "User registerd successfully");
    }

    res.redirect("/hello");
});

app.get("/hello" , (req, res) => {
    res.render("page.ejs" , {name: req.session.name });
});

app.get("/reqcount" , (req , res) => {
    if (req.session.count) {
        req.session.count++;
    }
    else{
        req.session.count = 1;
    }
    res.send(`you sent request ${req.session.count} times `);
});


// app.get("/test", (req,res) => {
//     res.send("Test successful");
// });

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookies" , (req,res) => {
//     res.cookie("madeIn" , "USA", {signed : true});
//     res.send("Signed cookie sent");
// });

// app.get("/verify" , (req,res) => {
//     console.log(req.signedcookies);
//     res.send("verified");
// });

// app.get("/getcookies" , (req , res) => {
//     res.cookie("greet", "Namaste");
//     res.cookie("madeIn", "India");
//     res.cookie("Name" , "Prakash");
//     res.send("Sent you some cookies");
// });

// app.get("/greet" , (req,res) => {
//     let {Name = "anonymous"} = req.cookies;
//     res.send(`Hi , ${Name}`);
// });

// app.get("/", (req,res) => {
//     console.dir(req.cookies);
//     res.send("Hii , I am Root ");
// });

// app.use("/users" , users);
// app.use("/posts", posts);


app.listen(3000 , () => {
    console.log("server is on Port 3000 ");
});