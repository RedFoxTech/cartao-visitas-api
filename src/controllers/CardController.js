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
            }).then(card => {
                res.status(200).json(card);
            }).catch(() => {
                res.status(400).json({
                    msg: 'card não encontrado!'
                });
            })
        },

        update: async (req, res) => {
            const { id } = req.params;
            const { name } = req.body;
            const { _id } = req.user;

            try{
                const card = await cards.findOne({ _id: id });
                const { doc: tag } = await tags.findOrCreate({ userId: _id, name });

                card.tags.push(tag);
                card.save();

                res.status.json({card});
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
                    msg: 'card deletado!'
                });
            }).catch(() => {
                res.status(400).json({
                    msg: 'falha ao excluir card'
                });
            })
        }
    }
}