module.exports = app => {
    const User = app.models.user;

    return {
        async show(req, res){
            const id  = req.user._id;
            try{
                const currentUser = await User.findOne(
                    { _id: id }
                )

                res.json(currentUser);
            }catch(error){
                return res.status(400).send({
                    error: 'Error loading logged user'
                });
            }
        },
        
        async index(req, res) {
            const { _id } = req.user;

            try {
                const users = await User.findOne({ _id });

                return res.send({
                    users
                });
            } catch (error) {
                return res.status(400).send({
                    error: 'Error loading users'
                });
            }
        },
        async update(req, res) {
            try {
                const user = await User.findByIdAndUpdate(req.user._id, {
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
                await User.findByIdAndRemove(req.user._id);

                return res.send({UserDeletedSucess: "The logged in user was deleted"});
            } catch (error) {
                res.status(400).send({
                    error: 'Error deleting user'
                })
            }
        },


    }
}