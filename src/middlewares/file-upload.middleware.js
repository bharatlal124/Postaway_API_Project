import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images/");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

//uploads the file using multer 
export const uploadFile = multer({
  storage: storageConfig,
});

//Checking that the file is received or not
export const uploadFileMiddleware = (req, res, next) => {
  console.log("File Upload Middleware: File received:", req.file);
  next();
};
