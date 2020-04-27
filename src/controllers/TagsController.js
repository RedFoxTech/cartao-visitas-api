module.exports = app => {
    const Tags = app.models.tags;
    const User = app.models.user;

    return {
        index: async (req, res) => {
            const { _id } = req.user;

            try{
                const user = await User.findOne({ _id })
                const tags = await Tags.find({ userId: user });
                res.json(tags);
            }catch(error){
                res.json({ error });
            }
        },

        create: async (req, res) => {
            const { _id } = req.user;
            const { name } = req.body;

            try{
                const user = await User.findOne({ _id });
                const tag = await Tags.create({ name, userId: user });

                res.json({ msg: 'tag criada' });
            }catch(error){
                res.json({ msg: error });
            }
        },

        remove: async (req, res) => {
            const { id } = req.params;
            const { _id } = req.user;

            try{
                const user = await User.findOne({ _id });
                const response = await Tags.deleteOne({ userId: user._id });

                res.json({ msg: response });
            }catch(error){
                res.json({ msg: error });
            }
        },

        update: async (req, res) => {
            const { name } = req.body;
            const { id } = req.params;
            const { _id } = req.user;

            try{
                const user = await User.findOne({ _id });
                const updated = await Tags.updateOne(
                    { userId: user, _id: id },
                    { name }
                )

                res.json({msg: 'alteração feita' })
            }catch(error){
                res.json({ msg: 'falha na alteração '});
            }
        }
    }
}