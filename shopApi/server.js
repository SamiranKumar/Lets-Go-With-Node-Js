const http = require("http");
const app = require("./app");


const port = process.env.PORT || 3030;
const server = http.createServer(app);

//throw Error().message = "my error";
server.on("error", function (err) {
    console.error("APP START ERROR:" + err);
})

server.listen(port, function () {
    console.log("APP START SERVER PORT:" + port);
});
