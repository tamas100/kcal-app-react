import './App.css';
import React, { useState } from 'react';
import FoodNutritionForm from './Components/FoodNutritionForm/FoodNutritionForm';
import FoodList from './Components/FoodList/FoodList';

export default function App() {
  const [foodItems, setFoodItems] = useState([
    {
      //id: 1691219945221, // js timestamp
      foodName: 'Cooked broccoli',
      kcal: 35,
      fat: .4,
      saturatedFat: 0,
      carbs: 7.2,
      sugar: 1.4,
      fiber: 3.3,
      protein: 2.4
    },
    {
      //id: 1691219945222, // js timestamp
      foodName: 'Lemon chicken',
      kcal: 226,
      fat: 11.8,
      saturatedFat: 1.9,
      carbs: 19.1,
      sugar: 8.7,
      fiber: 1.1,
      protein: 10.8
    },
    {
      foodName: 'Corn with butter',
      kcal: 106,
      fat: 2.4,
      saturatedFat: 1.1,
      carbs: 21.9,
      sugar: 0,
      fiber: 0,
      protein: 3.1
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kcal App</h1>
        <FoodNutritionForm />
        <FoodList foodItems={foodItems} />
      </header>
    </div>
  );
}


