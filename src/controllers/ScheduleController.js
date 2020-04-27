module.exports = app => {
    const Schedule = app.models.schedule;

    const mail = app.services.mail;

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;

    return {
        async index(req, res) {
            const userId = req.user._id

            try {
                const schedule = await Schedule.findOne({
                    userId: userId
                }).populate('cards');

                return res.send({
                    schedule
                });
            } catch (error) {

                return res.status(400).send({
                    error: 'Error loading schedule'
                })
            }
        },
        async createOrUpdate(req, res) {
            const userId = req.user._id
            const cards = req.body.cards

            try {
                const schedule = await Schedule.findOne({
                    userId: userId
                });

                if (!schedule) {
                    const create = await Schedule.create({
                        userId: userId,
                        cards: cards
                    })

                    return res.send(create)
                }

                const update = await Schedule.findOneAndUpdate({
                    userId: userId
                },{
                    $push:{
                        cards: cards
                    }
                })

                return res.send({
                    update
                });

            } catch (error) {
                console.log(error)
                return res.status(400).send({
                    error: 'Error updating schedule'
                })
            }
        },
        async exportTocsv(req, res) {
            try {

                const schedule = await Schedule.findOne({
                    userId: req.params.userId
                }).select('cards').populate('cards')

                //adicionar campos do cartao
                const csvWriter = createCsvWriter({
                    path: 'schedule.csv',
                    header: [{
                        id: 'tags',
                        title: 'tags'
                    }, {
                        id: 'notes',
                        title: 'notes'
                    }, {
                        id: 'fullName',
                        title: 'fullName'
                    }, {
                        id: 'company',
                        title: 'company'
                    }, {
                        id: 'jobTitle',
                        title: 'jobTitle'
                    }, {
                        id: 'email',
                        title: 'email'
                    }, {
                        id: 'location',
                        title: 'location'
                    }, {
                        id: 'website',
                        title: 'website'
                    }]
                });

                const data = []

                schedule.cards.map((item, i) => {
                    data[i] = {
                        tags: item.tags,
                        notes: item.notes,
                        fullName: item.fullName,
                        company: item.company,
                        jobTitle: item.jobTitle,
                        email: item.email,
                        location: item.location,
                        website: item.website
                    }
                });

                csvWriter
                    .writeRecords(data)
                    .then(() => console.log('The CSV file was written successfully'));
                
                mail.sendMail({
                    from: 'joe doe <example@email.com>',
                    to: 'Eu mesmo <example@gmail.com>',
                    subject: 'Testando envio de emails',
                    html: '<h1>CartãoVisitas</h1>'
                });

                return res.send();
            } catch (error) {
                return res.status(400).send({
                    error: 'Error exporting schedule'
                })
            }
        }
    }
}