const cloudinary = require('cloudinary').v2;
let streamifier = require('streamifier');

// Configuration 
cloudinary.config({
    cloud_name: process.env.CLAUDINARY_CLOUD_NAME,
    api_key: process.env.CLAUDINARY_API_KEY,
    api_secret: process.env.CLAUDINARY_API_SECRET,
  });

const uploadFromBuffer = (image) => {
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: "perfilUsers"
      },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(image.buffer).pipe(cld_upload_stream);
  });
};

module.exports = { uploadFromBuffer }; 