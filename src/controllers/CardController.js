module.exports = app => {
    const schedule = app.models.schedule;
    const card = app.models.card;

    return {
        index: (req, res) => {
            card.find({}).then(cards => {
                res.json(cards);
            }).catch(() => {
                res.json({
                    msg: 'falha ao listar'
                });
            })
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

        create: (req, res) => {
            const cardData = {
                ...req.body
            }

            card.create(cardData).then(response => {
                res.json({
                    msg: 'cartão adicionado!'
                });

            }).catch(() => {
                res.json({
                    msg: 'falha ao criar'
                });
            });


        },

        update: (req, res) => {
            const cardData = {
                ...req.body
            };
            const {
                id
            } = req.params;

            card.update({
                _id: id
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
            } = req.body;

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