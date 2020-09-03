const {
    exec
} = require("child_process")
const express = require('express');
const multer = require('multer');
const fs = require("fs");


const upload = multer({
    dest: __dirname + '/uploads/images'
});

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), async (req, res) => {
    if (req.file) {
        let result = await convertImage(req.file.path)
        res.sendFile(`${req.file.path}-gb.png`);
    } else throw 'error';
});

app.listen(PORT, () => {
    console.log('Listening at ' + PORT);
});

const convertImage = async (filePath) => {
    return new Promise((resolve, reject) => {
        exec(`./gb.sh ${filePath}`, (err, stdout, stderr) => {
            console.log("done")
            resolve()
        })

    })

}