// const http = require("http");
// const characters = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// // const PORT = 3001;

// http
//   .createServer((req, res) => {
//     console.log(`Server raised on port ${PORT}`);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const {url} = req;

// //     // "http://localhost:3001/rickandmorty/character/6"

// //     //?Opcion A

// //     // if(url.indexOf("/rickandmorty/character/")>= 0){
// //     // }

// //     //?HW webserver
//     if (url.includes("/rickandmorty/character/")) {
//       const urlId = parseInt(url.split("/").pop()); // ===> 6
//     let found = characters.find((character) => character.id === urlId); // (sin no hago parseInt arriba ocupo) Number(urlId)
//     console.log(found);

//     if (found) {
//       res
//         .writeHead(200, {"Content-Type": "application/json"})
//         .end(JSON.stringify(found));
//     }
// //     //? HW PROMISES

// //     if (url.includes("/rickandmorty/character/")) {
// //       const urlId = url.split("/").pop();
// //       getCharById(res, urlId);
// //     }
// //   })
//   .listen(PORT, "localhost"); // http://localhost:3001

//? EXPRESS

const express = require("express");
const router = require("./routes");
const server = express();

const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
