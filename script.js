async function getMealPlan() {
    const diet = document.getElementById('diet').value;
    const allergies = document.getElementById('allergies').value;
    const ingredients = document.getElementById('ingredients').value;
    const goal = document.getElementById('goal').value;
  
    const userInput = { diet, allergies, ingredients, goal };
  
    const mealPlanEl = document.getElementById('mealPlan');
    const groceryListEl = document.getElementById('groceryList');
    const nutritionTipsEl = document.getElementById('nutritionTips');
    const loader = document.getElementById('loader');
  
    // Clear previous results
    mealPlanEl.textContent = "";
    groceryListEl.textContent = "";
    nutritionTipsEl.textContent = "";
  
    // Show loading spinner
    loader.classList.remove("hidden");
  
    try {
      const mealPlanRes = await fetch('http://localhost:3000/api/mealPlan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput),
      });
      const mealPlanData = await mealPlanRes.json();
      mealPlanEl.textContent = mealPlanData.content;
  
      const groceryRes = await fetch('http://localhost:3000/api/groceryList', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mealPlan: mealPlanData.content }),
      });
      const groceryData = await groceryRes.json();
      groceryListEl.textContent = groceryData.content;
  
      const tipsRes = await fetch('http://localhost:3000/api/nutritionTips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput),
      });
      const tipsData = await tipsRes.json();
      nutritionTipsEl.textContent = tipsData.content;
  
    } catch (err) {
      mealPlanEl.textContent = '❌ Error generating meal plan';
      groceryListEl.textContent = '❌ Error generating grocery list';
      nutritionTipsEl.textContent = '❌ Error generating tips';
      console.error("AI Planner Error:", err);
    } finally {
      // Hide loading spinner
      loader.classList.add("hidden");
    }
  }
  