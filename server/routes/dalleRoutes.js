import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from ClipDrop Text-to-Image!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'Prompt is required and must be a non-empty string', received: prompt });
    }
    if (!process.env.CLIPDROP_API_KEY) {
      return res.status(500).json({ error: 'ClipDrop API key is not configured' });
    }

    // Call ClipDrop Text-to-Image API
    const response = await axios.post(
      'https://clipdrop-api.co/text-to-image/v1',
      { prompt },
      {
        headers: {
          'x-api-key': process.env.CLIPDROP_API_KEY,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer' // Because ClipDrop returns image data
      }
    );

    // Convert image buffer to base64
    const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
    // You can send as base64 or as a data URL
    const dataUrl = `data:image/png;base64,${imageBase64}`;

    return res.status(200).json({ photo: dataUrl });
  } catch (error) {
    console.error('ClipDrop API Error:', error?.response?.data || error.message);
    return res.status(500).json({
      error: 'Internal server error',
      details: error?.response?.data || error.message
    });
  }
});

export default router;
