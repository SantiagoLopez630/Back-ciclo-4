const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuariosController");
/*
router.get("/", (req, res) => {
    res.json({msg: "desde router get json postman"});
});

router.post("/", (req, res) => {
    res.json({msg: "desde router post json postman"});
});

router.put("/", (req, res) => {
    res.json({msg: "desde router put es para actualizar json postman"});
});

router.delete("/", (req, res) => {
    res.json({msg: "desde router delete es para borrar json postman"});
});
*/
router.post(
    "/",
    usuarioController.crearUsuario
);
// definir las rutas
module.exports = router;