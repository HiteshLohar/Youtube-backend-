import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({
    cloud_name: process.env.CLUDINARY_CLOUD_NAME,
    api_key: process.env.CLUDINARY_API_KEY,
    api_secret: process.env.CLUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => { 
    try {
        if(!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: 'auto',
        });

        console.log('File uploaded successfully ', response.url);
        // fs.unlinkSync(localFilePath);
        return response;

    } catch (error) {
        console.log('Error uploading file to Cloudinary: ', error);
        fs.unlinkSync(localFilePath);
        return null;
    }
}