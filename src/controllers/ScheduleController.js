module.exports = app => {
    const Schedule = app.models.schedule;
    const User = app.models.user;

    const mail = app.services.mail;

    const createCsvWriter = require('csv-writer').createObjectCsvWriter;

    return {
        async index(req, res) {
            const { _id } = req.user;

            try {
                const user = await User.findOne({ _id });
                const schedule = await Schedule.findOne({
                    userId: user
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
        async update(req, res) {
            try {
                const schedule = await Schedule.findOneAndUpdate({
                    userId: req.user._id
                }, {
                    $push: {
                        cards: req.body.card
                    }
                }, {
                    new: true
                });

                return res.send({
                    schedule
                });

            } catch (error) {
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
                
                schedule.cards.map((item,i) => {
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