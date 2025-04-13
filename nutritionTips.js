const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { diet, allergies, goal } = req.body;

  const prompt = `Give 3 nutrition and health tips for someone with a ${diet} diet, allergies: ${allergies}, and goal: ${goal}.`;

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2',
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );

    const output = response.data?.[0]?.generated_text || 'No tips generated.';
    res.json({ content: output.trim() });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to generate tips' });
  }
});

module.exports = router;






