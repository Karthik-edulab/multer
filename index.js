const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "./public")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("sample_file")
//.array("sample_file",3)    <----for multiple files
app.post("/upload", storage, (req, res) => {
    res.send("file upload")
});

app.listen(3900)

