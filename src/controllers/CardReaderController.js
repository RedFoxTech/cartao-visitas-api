const path = require('path');
const fs = require('fs');
const vision = require('@google-cloud/vision');
const { GoogleToken } = require('gtoken');

const gtoken = new GoogleToken({
    keyFile: path.resolve(__dirname, '..', '..', 'vision_key.json')
})

const client = new vision.ImageAnnotatorClient(Credential=gtoken);

module.exports = app => {
  const Card = app.models.card;
  const Schedule = app.models.schedule;

  return {
    read: async (req, res) => {
          //a imagem vai vir pelo req.body
          //const { imagePath } = req.body;
      const imagePath = req.file.path;

      const [ result ] = await client.textDetection(imagePath);
      const detections = result.textAnnotations;

      const cardFields = detections.map(text => text.description.split('\n'))[0];

      const cardData = {};

      cardFields.map(data => {
        if(data.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)$/)){
          return cardData['email'] = data;
        }
          
        if(data.match(/^www\.([A-z0-9]+)\.([A-z]+)$/)){
          return cardData['site'] = data;
        }
          
        if(data.match(/(^\d+\s[A-z\.]+\s[A-z]+)/g)){
          return cardData['address'] = data;
        }
          
        if(data.match(/(^[A-z]+) ([A-z]+)([ A-z]?)/) && !cardData['name']){
          return cardData['name'] = data;
        }

        if(data.match(/\(?\d{1,}\)? \d{3,}(\-| ?)\d{3}/)){
          return cardData['phone'] = data;
        }
      });

      fs.unlinkSync(imagePath);

      res.status(200).json(cardData);
    }
  }
}