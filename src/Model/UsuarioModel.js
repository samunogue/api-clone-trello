import mongoose from "mongoose";
import bcrypt from 'bcrypt'
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
UsuarioSchema.pre('save', async function (next){
    this.senha = await bcrypt.hash(this.senha, 10)
    next()
})
const Usuario_bd = mongoose.model('usuarios', UsuarioSchema)
export default Usuario_bd