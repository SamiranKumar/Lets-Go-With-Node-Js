const http = require("http");
const app = require("./app");


const port = process.env.PORT || 3000;
const server = http.createServer(app);

//throw Error().message = "my error";
server.on("error", function (err) {
    console.error("App Error:" + err);
})

server.listen(port, function () {
    console.log("App Listen Pont No:" + port);
});
