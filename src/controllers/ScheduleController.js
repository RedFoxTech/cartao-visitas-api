const Schedule = require('../models/schedule');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

module.exports = {
    async index(req, res) {
        try {
            const schedule = await Schedule.findOne({
                userId: req.params.userId
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
                userId: req.params.userId
            }, {
                $push: {
                    cards: req.body.cardId
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

            const schedule = await User.findOne({
                userId: req.params.userId
            });
            //adicionar campos do cartao
            const csvWriter = createCsvWriter({
                path: 'schedule.csv',
                header: [{
                    id: 'name',
                    title: 'Name'
                }, {
                    id: 'email',
                    title: 'email'
                }]
            });

            const data = schedule

            csvWriter
                .writeRecords(data)
                .then(() => console.log('The CSV file was written successfully'));

            return res.send();
        } catch (error) {
            return res.status(400).send({
                error: 'Error exporting schedule'
            })
        }
    }
}