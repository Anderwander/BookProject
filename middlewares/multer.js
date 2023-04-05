import multer from 'multer';
import path  from 'path';

const storage = multer.diskStorage({
    destination: function(req, file, cb) { // cb callback
        const __dirname = path.resolve();
        cb(null, path.join(__dirname, 'public', 'uploads'));
    },
    filename: function (req, file, cb) {
        const name = req.body.username + "-" + req.body.idbook;
        cb(null, name + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export default upload;