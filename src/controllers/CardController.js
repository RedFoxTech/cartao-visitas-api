module.exports = app => {
    const tags = app.models.tags;
    const cards = app.models.card;

    return {
        show: (req, res) => {
            const {
                id
            } = req.params;
            cards.findOne({
                _id: id
            }).populate('tags').then(card => {
                res.status(200).json(card);
            }).catch(() => {
                res.status(400).json({
                    msg: 'card não encontrado!'
                });
            })
        },

        update: async (req, res) => {
            const { id } = req.params;
            const { tags } = req.body;

            try{
                const card = await cards.findOne({ _id: id });
             
                card.tags.push(tags);
                card.save();

                res.status(200).json({msg: 'sucessfully updated card'})
            }catch(error){
                res.status(400).json(error)
            }
        },

        remove: (req, res) => {
            const {
                id
            } = req.params;

            cards.deleteOne({
                _id: id
            }).then(() => {
                res.status.json({
                    msg: 'sucessfully deleted business card'
                });
            }).catch(() => {
                res.status(400).json({
                    msg: 'error deleting business card'
                });
            })
        }
    }
}