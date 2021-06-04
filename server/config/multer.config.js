const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 10000000 },

  fileFilter: (req, file, cb) => {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
      cb(new Error("Invalid image format!"));
      return;
    }
    // We pass in true to cb as such if the file
    // makes it to this point in order to accept it
    cb(null, true);
  },
}).array("files", 5);

module.exports = upload;
