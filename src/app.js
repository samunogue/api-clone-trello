import express from "express";
import bodyParser from "body-parser";
import db from "./Data/db_connect.js";
import routes from "./Routes/index.js";

const app = express();

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", ()=> {
        console.log("conexao feita com sucesso"); 
}); 

app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested, Content-Type, Accept, token"
        )
        res.header(
                "Access-Control-Allow-Methods",
                "POST, PUT, PATCH, GET, DELETE"
              )
    app.use(bodyParser.json())    
    app.use(express.json()) 
    next();
});
routes(app)

export default app;