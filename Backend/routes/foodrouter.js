import express from "express";
import { addfood, listfood, removefood } from "../controller/foodcontroller.js";
import multer from "multer";

const foodrouter = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload =multer({storage:storage});

foodrouter.post("/addfood", upload.single("image"), addfood);
foodrouter.get("/allfooditems", listfood);
foodrouter.post("/removefood", removefood);

export default foodrouter;