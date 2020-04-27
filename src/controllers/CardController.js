module.exports = app => {
    const schedule = app.models.schedule;
    const cards = app.models.card;
    const users = app.models.user;

    return {
        index: async (req, res) => {
            const { _id } = req.user;

            try{
                const user = await users.findOne({ _id });
                const card = await cards.find({});

                res.json({card});
            }catch(error){
                res.json({error});
            }
        },

        show: (req, res) => {
            const {
                id
            } = req.params;
            card.findOne({
                _id: id
            }).then(card => {
                res.json(card);
            }).catch(() => {
                res.json({
                    msg: 'card não encontrado!'
                });
            })
        },

        create: async (req, res) => {
            const cardData = { ...req.body };
            const { _id } = req.user;

            try{
                const card = await cards.create(cardData);
                const user = await users.updateOne({ _id }, { businessCard: card });

                res.status(200).json({ msg: 'cartão criado '});
            }catch(error){
                res.status(400).json({ msg: 'falha na criacao '});
            }

        },

        update: (req, res) => {
            const cardData = {
                ...req.body
            };
            const {
                _id
            } = req.user;

            card.update({
                owner: _id
            }, cardData).then(() => {
                res.json({
                    msg: 'card atualizado!'
                });
            }).catch(() => {
                res.json({
                    msg: 'falha ao atualizar'
                });
            })
        },

        remove: (req, res) => {
            const {
                id
            } = req.params;

            card.deleteOne({
                _id: id
            }).then(() => {
                res.json({
                    msg: 'card deletado!'
                });
            }).catch(() => {
                res.json({
                    msg: 'falha ao excluir card'
                });
            })
        }
    }
}