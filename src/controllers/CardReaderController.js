const path = require('path');
const fs = require('fs');
const vision = require('@google-cloud/vision');
const { GoogleToken } = require('gtoken');

const gtoken = new GoogleToken({
    keyFile: path.resolve(__dirname, '..', '..', 'vision_key.json')
})

const client = new vision.ImageAnnotatorClient(Credential=gtoken);

module.exports = app => {
    return {
        read: async (req, res) => {
            //const { imagePath } = req.body;
            const imagePath = req.file.path;

            const [ result ] = await client.textDetection(imagePath);
            const detections = result.textAnnotations;

            const cardFields = detections.map(text => text.description.split('\n'))[0];

            const card = {};

            cardFields.map(data => {
              if(data.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)$/)){
                return card['email'] = data;
              }
          
              if(data.match(/^www\.([A-z0-9]+)\.([A-z]+)$/)){
                return card['site'] = data;
              }
          
              if(data.match(/(^\d+\s[A-z\.]+\s[A-z]+)/g)){
                return card['address'] = data;
              }
          
              if(data.match(/(^[A-z]+) ([A-z]+)([ A-z]?)/) && !card['username']){
                return card['username'] = data;
              }
            });

            fs.unlinkSync(imagePath);
            res.send(card);
        }
    }
}