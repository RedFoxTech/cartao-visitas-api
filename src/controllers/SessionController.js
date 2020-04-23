const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const Users = app.models.user;

    return{
        create: (req, res) => {
            const { email, password } = req.body;
            
            Users.findOne({ email }, (err, user) => {
                //se não encontrar usuario
                if(!user) return res.json({msg: 'incorrect email!'});
                //se a senha estiver errada
                if(!bcrypt.compareSync(password, user.password)) 
                    return res.json({ msg: 'password incorrect'});

                const token = jwt.sign({ id: user._id }, 'secret');
                const bearerToken = `Bearer ${token}`;

                res.json({token: bearerToken});
            }).select('+password');
        }
    }
}