const multer = require('multer');

const MIMETYPES = ['image/jpeg', 'image/png'];

const multerImage = multer({
  fileFilter: (req, file, cb) => {
      if (MIMETYPES.includes(file.mimetype)) cb(null, true);
      else cb(new Error(`Solo ${MIMETYPES.join(' ')} mimetypes son permitidos`));
  },
  limits: {
      fieldSize: 10000000,
  },
});

module.exports.image = multerImage.single('image');
  