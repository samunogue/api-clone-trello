import Usuario_bd from "../Model/UsuarioModel.js";

class UsuarioController{
    static BuscarCards = (req, res) =>{
        const {id} = req.params
        Usuario_bd.findById(id, (error, usuario) =>{
            if(error) res.status(404).send({message: "Usuario Não encontrado"})
            res.status(200).json(usuario)
        })
    }
    static AdicionarUsuario = (req, res) =>{
        const usuario = new Usuario_bd(req.body)
        usuario.save((error =>{
            if(error) res.status(500).send({message: error.message})
            res.status(201).json(usuario)
        }))
    }
    static SalvarCards = async (req, res) =>{
        const id = req.params.id
        Usuario_bd.findByIdAndUpdate(id, {$set : req.body},  (error) => {
                if(error) res.status(500).send({message: error.message})
                res.status(200).send({message:"Cards salvo com sucesso"})
        }) 
    }
}
export default UsuarioController