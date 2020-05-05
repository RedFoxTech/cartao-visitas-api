module.exports = app => {
    const Tags = app.models.tags;
    const User = app.models.user;

    return {
        index: async (req, res) => {
            const { _id } = req.user;

            try{
                const user = await User.findOne({ _id })
                const tags = await Tags.find({ userId: user });
                res.status(200).json(tags);
            }catch(error){
                res.status(400).json({ error });
            }
        },

        create: async (req, res) => {
            const { _id } = req.user;
            const { name } = req.body;

            try{
                const user = await User.findOne({ _id });
                const tag = await Tags.create({ name, userId: user });

                res.status(200).json({ msg: 'successfully created tag' });
            }catch(error){
                res.status(400).json({ msg: 'error creating tag' });
            }
        },

        remove: async (req, res) => {
            const { id } = req.params;

            try{
                const response = await Tags.deleteOne({ _id:id });

                res.status(200).json({ msg: 'sucessfully deleted tag' });
            }catch(error){
                res.status(400).json({ msg: 'error deleted tag' });
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

                res.status(200).json({msg: 'sucessfully updated tag' })
            }catch(error){
                res.status(400).json({ msg: 'error updating tag'});
            }
        }
    }
}