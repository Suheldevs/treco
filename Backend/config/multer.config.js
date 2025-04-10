import multer from "multer";
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploadDir = path.join(__dirname,'../upload/product');
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir,{recursive:true})
}

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,uploadDir);
//     },
//     filename:(req,file,cb)=>{
//         const ext = path.extname(file.originalname);
//         const baseName = path.basename(file.originalname, ext);
//         cb(null, `${baseName}_${Date.now()}${ext}`);
//     }
// })

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.test(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  };

const storage = multer.memoryStorage(); 
export const upload = multer({storage,fileFilter,limits:{fileSize:1*1024*1024}})