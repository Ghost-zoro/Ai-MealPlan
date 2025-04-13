const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/mealPlan', require('./routes/mealPlan'));
app.use('/api/groceryList', require('./routes/groceryList'));
app.use('/api/nutritionTips', require('./routes/nutritionTips'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
