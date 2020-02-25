import Response from '../../../utils/index';
import { SERVER_ERROR } from '../../../utils/constant';
import 'dotenv/config';

const cloudinary = require('cloudinary').v2;

class CloudinaryImageUpload {
  static async imageUpload(req, res, next) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    if (!req.files) {
      return next();
    }

    try {
      const tempFile = req.files.image;
      return cloudinary.uploader.upload(tempFile.tempFilePath, async (err, result) => {
        if (err) {
          return res.json({
            message: 'Upload was unsuccessful. Try again',
          });
        }
        req.body.image = result.url;
        return next();
      });
    } catch (error) {
      return Response(res, { status: 500, message: SERVER_ERROR });
    }
  }
}

const { imageUpload } = CloudinaryImageUpload;
export default imageUpload;
