const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, `../Uploads`);
    console.log(uploadPath);
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const blogTitle = file.fieldname;
    if (!blogTitle) {
      return cb(new Error("Blog title is required"), null);
    }
    const name = blogTitle.replace(/\s+/g, "");
    const filename = name + "_" + Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpg", "image/png", "image/jpeg"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only .png, .jpg, and .jpeg files are allowed"), false);
    }
  },
  limits: { fileSize: 10000000 },
  storage: storage,
});

module.exports = upload;
