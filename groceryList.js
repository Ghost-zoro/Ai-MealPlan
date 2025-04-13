const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { mealPlan } = req.body;

  const prompt = `Based on this meal plan:\n${mealPlan}\nGenerate a detailed grocery list.`;

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

    const output = response.data?.[0]?.generated_text || 'No grocery list generated.';
    res.json({ content: output.trim() });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to generate grocery list' });
  }
});

module.exports = router;





