module.exports = app => {
    const businessCard = app.models.BusinessCard;

    return {
        index: (req, res) => {
            businessCard.find({}).then(cards => {
                res.json(cards);
            }).catch(() => {
                res.json({ msg: 'falha ao listar' });
            })
        },

        show: (req, res) => {
            const { id } = req.params;
            businessCard.findOne({_id: id}).then(card => {
                res.json(card);
            }).catch(() => {
                res.json({ msg: 'card não encontrado!' });
            })
        },

        create: (req, res) => {
            const cardData = {...req.body}

            businessCard.create(cardData).then(() => {
                res.json({ msg: 'cartão adicionado!'});
            }).catch(() => {
                res.json({ msg: 'falha ao criar' });
            })
        },

        update: (req, res) => {
            const cardData = { ...req.body };
            const { id } = req.params;

            businessCard.update({ _id: id }, cardData).then(() => {
                res.json({ msg: 'card atualizado!' });
            }).catch(() => {
                res.json({ msg: 'falha ao atualizar' });
            })
        },

        remove: (req, res) => {
            const { id } = req.body;

            businessCard.deleteOne({ _id: id }).then(() => {
                res.json({ msg: 'card deletado!' });
            }).catch(() => {
                res.json({ msg: 'falha ao excluir card' });
            })
        }
    }
}