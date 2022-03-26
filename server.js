const express = require("express");
const app = express()

app.use(express.json());
app.get("/", (request, response)=>{
    response.send("<h2>WELCOME TO EXPRESS DEMO</h2>")
})

app.get("/home", (req,res)=>{
    let fullname = req.query.fullname;
    res.send("<b>Home Page</b>" + fullname)
})

app.get("/login/:email/:password", (req,res)=>{
    let email = req.params.email;
    let pwd = req.params.password;

    res.send("login"+email+pwd);
})

app.post("/register", (req,res)=>{
    let fullname = req.body.fullname;
    res.send(fullname);
})

app.get("/form", (req,res)=>{
    res.sendFile(__dirname + "/htmlpages/form.html");
})

app.listen(3000, (e)=>{
    console.log("Server Started");
})