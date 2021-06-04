var express = require('express');
var router = express.Router();
const db = require("../config/firebase")
const cloudinary = require("../config/cloudinary.config");
const multerUpload = require("../config/multer.config");

router.post("/api/upload", multerUpload, async(req, res) => {
  const files = req.files;
  const body = req.body;
  try{
    //Map through files and upload to cloudinary
    const urlPromises = files.map(async file => {
      const result = await cloudinary.uploader.upload(file.path);
      // You can log result to your console to 
      // see all it returns. We only need the url, hence
      // we're extracting it alone.
      return result.url
    })
    //Resolve the array of promises and store in a constant.
    //This array will be an array of urls
    const imageUrls = await Promise.all(urlPromises)
    //add the data to firebase using the imported db
    //The following code will create a users document and add
    //the incoming data to it
    const data = {name: body.name, images: imageUrls}
    db.collection("users").add(data)
    .then(resp => res.status(201).json({message: "Upload successful", data}))
    .catch(err => res.status(400).json({status: error, message: err.message}))
  }catch(e){
    res.status(400).send(e.message)
  }
  
})

module.exports = router;
