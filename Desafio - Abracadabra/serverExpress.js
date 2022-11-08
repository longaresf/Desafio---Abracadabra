const express = require("express");
const app = express();
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'María', 'Ignacia', 'Javier', 'Brian'];

app.listen(3000, () => {
    console.log("'Servidor disponible en http://localhost:3000'");
    });

app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
    })

app.get("/abracadabra/usuarios", (req, res) => {
    res.json({usuarios});
    });

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const usuario = req.params.usuario;
    const user = usuarios.includes(`${usuario}`);
           user ? next() : res.sendFile(__dirname + '/assets/who.jpeg');
    });

app.get("/abracadabra/juego/:usuario", (req, res) => {
    res.sendFile(__dirname + '/index.html');
    });

app.get("/abracadabra/conejo/:n", (req, res) => {
    const n = Math.floor(Math.random() * (5 - 1)) + 1;
    const numero = req.params.numero;
    numero == n
    ? res.sendFile(__dirname + '/assets/conejito.jpg')
    : res.sendFile(__dirname + '/assets/voldemort.jpg');
    });

app.get("*", (req, res) => {
    res.send("<center><h1> &#128545; Esta página no existe &#128540; </h1> </center>");
    });
