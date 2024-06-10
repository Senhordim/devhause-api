import User from '../models/UserModel.js';

class SessionController{
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({
            email
        });

        if(!user){
            user = await User.create({ email });
        }
   
        return res.json({
            usuário: user
        })
    }
}

export default new SessionController();