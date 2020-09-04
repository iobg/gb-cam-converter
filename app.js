const awsServerlessExpress = require('aws-serverless-express')

const {
    exec
} = require("child_process")
const express = require('express');
const multer = require('multer');
const fs = require("fs");


const bodyParser = require('body-parser')


const upload = multer({
    dest:'/tmp'
});

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));

app.post('/upload', upload.single('photo'), async (req, res) => {
    if (req.file) {
        let result = await convertImage(req.file.path, req.body)
        res.sendFile(`${req.file.path}-gb.png`);
    } else throw 'error';
});


const convertImage = async (filePath, params) => {
	let scale = params.scale ? params.scale : 100;
	let width = params.xpx ? params.xpx : 128;
	let height = params.ypx ? params.ypx : 112;


    return new Promise((resolve, reject) => {
        exec(`./gb.sh ${filePath} ${scale} ${width} ${height}`, (err, stdout, stderr) => {
            console.log("done")
            resolve()
        })

    })

}

const server = awsServerlessExpress.createServer(app, null, ['multipart/form-data', 'image/png', '*/*'])

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }