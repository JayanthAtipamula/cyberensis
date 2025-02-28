import { put } from '@vercel/blob';
import { v4 as uuidv4 } from 'uuid';

export async function uploadToBlob(file: File) {
  try {
    // Generate a unique filename with original extension
    const fileExtension = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    
    // Upload to Vercel Blob
    const { url } = await put(fileName, file, {
      access: 'public',
      token: import.meta.env.VITE_BLOB_READ_WRITE_TOKEN,
    });
    
    return url;
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    throw error;
  }
} 