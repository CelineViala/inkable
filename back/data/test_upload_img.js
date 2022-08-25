require('dotenv').config();

const cloudinary = require('cloudinary');

console.log(cloudinary.config().cloud_name);

cloudinary.uploader
    .upload('tree.jpg', {
        ressource_type: 'image',
    });
