// lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Helper function for optimized images
export const getOptimizedImageUrl = (publicId: string, width?: number, height?: number) => {
  return cloudinary.url(publicId, {
    width: width || 800,
    height: height || 600,
    crop: 'fill',
    quality: 'auto',
    format: 'auto',
    fetch_format: 'auto'
  });
};