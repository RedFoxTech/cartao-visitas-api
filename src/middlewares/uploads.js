const multer = require('multer');

module.exports = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './temp/uploads')
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`);
        }
    })

    const upload = multer({ storage });

    return upload;
}