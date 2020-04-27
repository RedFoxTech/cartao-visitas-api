module.exports = app => {
    const User = app.models.user;

    return {
        async show(req, res){
            const { _id } = req.user;

            try{
                const currentUser = await User.findOne(
                    { _id }
                )

                res.json(currentUser);
            }catch(error){
                res.json({ msg: 'usuario não logado!'})
            }
        },

        /*async index(req, res) {
            try {
                const users = await User.find();

                return res.send({
                    users
                });
            } catch (error) {
                return res.status(400).send({
                    error: 'Error loading users'
                });
            }
        },*/
        async create(req, res) {
            const {
                email
            } = req.body

            try {
                if (await User.findOne({
                        email
                    }))
                    return res.status(400).send({
                        error: 'User already exists'
                    });

                const user = await User.create(req.body);

                user.password = undefined;

                return res.send({
                    user
                });

            } catch (error) {
                return res.status(400).send({
                    error
                });
            }
        },
        async update(req, res) {
            try {
                const user = await User.findByIdAndUpdate(req.params.userId, {
                    ...req.body
                }, {
                    new: true
                });

                return res.send({
                    user
                });
            } catch (error) {
                res.status(400).send({
                    error: 'Error updating user'
                })
            }
        },
        async delete(req, res) {
            try {
                await User.findByIdAndRemove(req.params.userId);

                return res.send();
            } catch (error) {
                res.status(400).send({
                    error: 'Error deleting user'
                })
            }
        },


    }
}