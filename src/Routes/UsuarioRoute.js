import express from "express";
import UsuarioController from "../Controller/UsuarioController.js";

const router = express.Router();

router
        .get('/v1/usuario/:id', UsuarioController.BuscarCards)
        .post('/v1/usuario', UsuarioController.AdicionarUsuario)
        .post('/v1/card/:id', UsuarioController.SalvarCards)

export default router;