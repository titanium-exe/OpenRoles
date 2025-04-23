import multer from "multer";

const storage = multer.memoryStorage();
// file should be named same as type in signup, type of the input
export const singleUpload = multer({storage}).single("file"); 