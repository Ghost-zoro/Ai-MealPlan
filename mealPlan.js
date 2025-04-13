const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { diet, allergies, ingredients, goal } = req.body;

  const prompt = `Create a personalized 1-day meal plan for someone who follows a ${diet} diet, has these allergies: ${allergies}, and has these ingredients: ${ingredients}. Their goal is: ${goal}. Include breakfast, lunch, dinner, and snacks.`;

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

    const output = response.data?.[0]?.generated_text || 'No meal plan generated.';
    res.json({ content: output.trim() });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to generate meal plan' });
  }
});

module.exports = router;













