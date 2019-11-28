const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.on("error",function(err){
    console.error("APP START ERROR:"+err);
});


server.listen(port,function(){
    console.log("APP START PORT:"+port);
});