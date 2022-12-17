import express from "express";
import UsuarioRoute from './UsuarioRoute.js'

const routes = (app) =>{
        app.get('/',(req,res)=>{
                res.status(200).send({message:"Bem vindo a API do clone-trello"})
        })
        app.use(
                express.json(),
                UsuarioRoute,

        )
}
export default routes