import mongoose from "mongoose";
const UsuarioSchema = new mongoose.Schema(
        {
            id:{type: String},
            login: {type: String, required: true},
            senha: {type: String, required:true},
            cards:[
                {
                    titulo:{type: String},
                    tarefas:{type: Array}
                }
            ]
        }
)
const Usuario_bd = mongoose.model('usuarios', UsuarioSchema)
export default Usuario_bd