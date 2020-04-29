module.exports = app => {
    const Schedule = app.models.schedule;
    const User = app.models.user;
    const Card = app.models.card;

    const mail = app.services.mail;

    const createCsvStringfier = require('csv-writer').createObjectCsvStringifier;

    return {
        async index(req, res) {
            const { _id } = req.user;

            try {
                const user = await User.findOne({ _id });
                const schedule = await Schedule.findOne({
                    userId: user
                }).populate('cards');

                return res.status(200).send({
                    schedule
                });
            } catch (error) {
                return res.status(400).send({
                    error: 'Error loading schedule'
                })
            }
        },
        async update(req, res) {
            const { userId } = req.params;

            try {
                const {
                    name,
                    company,
                    office,
                    email,
                    phone,
                    image,
                    logo
                } = await User.findOne({ _id: userId });

                const { doc: card } = await Card.findOrCreate({
                    name,
                    company,
                    office,
                    email,
                    phone,
                    image,
                    logo
                });

                const schedule = await Schedule.findOne({ userId: req.user._id });
                schedule.cards.push(card);
                schedule.save();

                return res.status(200).send(schedule);

            } catch (error) {
                return res.status(400).send({
                    error
                })
            }
        },
        async exportTocsv(req, res) {
            try {

                const user = await User.findOne({ _id: req.user._id });
                const schedule = await Schedule.findOne({
                    userId: req.user._id
                }).select('cards').populate('cards')

                //adicionar campos do cartao
                const csvStringfier = createCsvStringfier({
                    header: [{
                        id: 'name',
                        title: 'NAME'
                    }, {
                        id: 'company',
                        title: 'COMPANY'
                    }, {
                        id: 'office',
                        title: 'OFFICE'
                    }, {
                        id: 'email',
                        title: 'EMAIL'
                    }, {
                        id: 'phone',
                        title: 'PHONE'
                    }, {
                        id: 'email',
                        title: 'EMAIL'
                    }]
                });

                
                const csvProperty = csvStringfier.getHeaderString(schedule.cards);
                const csvValues = csvStringfier.stringifyRecords(schedule.cards);
                
                
                mail.sendMail({
                    from: 'joe doe <example@redfox.tech>',
                    to: `${user.name} <${user.email}>`,
                    subject: 'Testando envio de emails',
                    html: '<h1>CartãoVisitas</h1>',
                    attachments: [{
                        filename: 'cards.csv',
                        content: `${csvProperty}${csvValues}`
                    }]
                });

                return res.status(200).send('email enviado!');
            } catch (error) {
                return res.status(400).send({
                    error: 'Error exporting schedule'
                })
            }
        }
    }
}