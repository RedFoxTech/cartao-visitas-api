const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const { JWT_SECRET } = app.config.config;
    const Users = app.models.user;

    return{
        create: (req, res) => {
            const { email, password } = req.body;
            
            Users.findOne({ email }, (err, user) => {
                //se não encontrar usuario
                if(!user) return res.status(400).json({msg: 'incorrect email!'});
                //se a senha estiver errada
                if(!bcrypt.compareSync(password, user.password)) 
                    return res.status(400).json({ msg: 'password incorrect'});

                const token = jwt.sign({ id: user._id }, JWT_SECRET);

                res.status(200).json({ token });
            }).select('+password');
        }
    }
}