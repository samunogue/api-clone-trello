import Usuario_bd from "../Model/UsuarioModel.js";
import bcrypt from 'bcrypt'
class UsuarioController{
    static Login = async (req, res) =>{
        const {login, senha} = req.body
        const user = await Usuario_bd.find({login})
            .then(response =>{
                return response
            }).catch(erro =>{
               return ({error: erro})
            })
        if(user.length == 1){
            const auth = await bcrypt.compare(senha, user.senha)
            if(auth == true){
                res.status(200).json({'id':user[0]._id, username: user[0].login, auth: true})
            }
        } 
        if(user.length == 0) res.status(200).json({message: "User não encontrado", auth: false})
    }
    static BuscarCards = (req, res) =>{
        const {id} = req.params
        Usuario_bd.findById(id, (error, usuario) =>{
            if(error) res.status(404).send({message: "Usuario Não encontrado"})
            res.status(200).json(usuario.cards)
        })
    }
    static AdicionarUsuario = (req, res) =>{
        const usuario = new Usuario_bd(req.body)
        usuario.save((error =>{
            if(error) res.status(500).send({message: error.message})
            res.status(201).json(usuario)
        }))
    }
    static SalvarCard = async (req, res) =>{
        const idUser = req.params.id
        const idCard = req.body._id
        Usuario_bd.findById(idUser,(error, usuario) => {
                if(error) res.status(500).send({message: error.message})
                usuario.cards.forEach(card => {
                    if(card._id == idCard){
                        card.tarefas = req.body.tarefas
                        usuario.save()
                        res.status(201).json(usuario.cards)
                    }
                });
        }) 
    }
}
export default UsuarioController