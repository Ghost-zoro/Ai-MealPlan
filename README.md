# 🧠 AI-Based Personalized Meal Planner & Nutritional Advisor

A web-based smart assistant that generates healthy meal plans, grocery lists, and nutritional advice based on your diet, allergies, and fitness goals — powered by **GPT-2 via Hugging Face Inference API**.

---

## 🌟 Features

- ✅ Personalized 1-day meal plan generation
- 🛒 Grocery list builder based on meal plan
- 💡 Nutrition tips tailored to your diet and goals
- 📱 Fully responsive frontend (HTML/CSS/JS)
- 🔁 Prompt chaining with GPT-2 responses

---

## 🔧 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **LLM API**: Hugging Face Inference API (GPT-2 / Flan-T5)
- **Libraries**: Axios, dotenv, Express

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/meal-planner-ai.git
cd meal-planner-ai

2. Install Backend Dependencies
bash
Copy
Edit
cd server
npm install

3.Setup Environment Variables
Create a .env file in the server/ folder:

env
Copy
Edit
HUGGINGFACE_API_KEY=your-huggingface-api-key
You can get your key from https://huggingface.co/settings/tokens


4. Start the Server
bash
Copy
Edit
node index.js
Server will run at: http://localhost:3000

5. Open the Frontend
Just open client/index.html in a browser
Or use Live Server extension (recommended)

📦 Project Structure
pgsql
Copy
Edit
meal-planner-ai/
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── index.js
│   └── routes/
│       ├── mealPlan.js
│       ├── groceryList.js
│       └── nutritionTips.js
│
├── .env
└── README.md
📋 API Endpoints
Endpoint	Method	Description
/api/mealPlan	POST	Generates a 1-day meal plan using GPT-2
/api/groceryList	POST	Creates a categorized grocery list
/api/nutritionTips	POST	Returns 3 nutrition tips
🔐 Example Input
json
Copy
Edit
{
  "diet": "vegetarian",
  "allergies": "nuts",
  "goal": "muscle gain"
}
💡 Notes
Models used: google/flan-t5-small or similar

Rate limits may apply on Hugging Face's free tier

For best performance, use structured prompts and handle errors gracefully

📜 License
MIT License — free to use, learn, and improve!

yaml
Copy
Edit

---




