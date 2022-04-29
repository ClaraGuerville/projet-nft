const MIMETYPES = {
    'image/jpg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'image/jpeg': 'jpg',
}
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/uploads')
    }, 
    filename: (request, file, callback) => {
        //nom du fichier avce son extension
        const name = file.originalname;
        const extension = MIMETYPES[file.mimetype];
        // decoupe la chaine de caratere au niveau du point pour faire un tableau et on remplace les espaces par underscore
        const storageFileName = name.split('.')[0].split(' ').join('_') + Date.now() + '.' + extension
        callback(null, storageFileName)
    }
});

module.exports = multer({storage}).single('oeuvre');