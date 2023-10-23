import express from 'express';
import cors from 'cors';
import multer from 'multer';
import conn from '../db.js';

const router = express.Router();
router.use(cors());
router.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "../src/images")
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single("file"), async (req, res) => {
    console.log(req.file);
    const imageeName = req.file.filename ;

    try {
    await conn.query(`INSERT INTO growth(imgUrl) 
    VALUES(?)`, [imageeName], (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        console.log('Row inserted:' + result);
        res.json({ status: "ok" });
    })
    } catch (error) {
        res.json({ status: error });
    }
})

router.get("/get_image", async (req, res) => {
    try {
    conn.query(`SELECT imgUrl from growth LIMIT 8`, (err, result) => {
        if(err){
        return console.log(err.message);
        }
        res.json({status: "ok", data: result})
    });
    } catch (error) {
        res.json({ status: error })
    }
})


export default router ;