var express=require("express")
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

app.get("/iacsd",function(req,resp){
    resp.sendFile("public/info.html",{root:__dirname});
});

app.listen(8000);
console.log("server is running at port 8000");