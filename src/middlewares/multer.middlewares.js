/*
 * the whole purpose of this middleware is to return a local filepath which is given to cloudinary utility function
 * the cloudinary utility function will upload the file in cloudinary servers and will return the url cloudinary
 */

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
