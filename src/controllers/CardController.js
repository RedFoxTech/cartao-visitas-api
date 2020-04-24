module.exports = app => {
    const schedule = app.models.schedule;
    const card = app.models.card;
    const users = app.models.user;

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
            const cardData = { ...req.body };
            const { _id } = req.user;

            card.create({ ...cardData, owner: _id }).then(response => {
                users.findOneAndUpdate({ _id }, {businessCard: response })
                    .then(() => {
                        res.status(200).json({ msg: 'cartão criado!' });
                    })
            }).catch(err => {
                res.status(400).json({ msg: 'falha na criacao '});
            })

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