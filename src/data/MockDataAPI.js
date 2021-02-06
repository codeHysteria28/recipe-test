import { Text } from 'react-native';
import React, { Component } from 'react';
import { recipes, categories, ingredients } from './dataArrays';
import firebase from 'firebase';
import {firebaseConfig} from '../firebase';

if(!firebase.apps.length) {
  // initialiaze firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

// nacitanie kategorii z firebase databazy
const fetchCategories = async () => {
  let category;
  const response = db.ref('categories');
  const snapshot = await response.once('value');
  snapshot.forEach(childSnapshot => {
    category = childSnapshot.val();
  });
  return category;
}

// nacitanie ingrediencii z firebase databazy
const fetchIngredience = async () => {
  let ingredients;
  const response = db.ref('ingredients');
  const snapshot = await response.once('value');
  snapshot.forEach(childSnapshot => {
    ingredients = childSnapshot.val();
  });
  return ingredients;
}

// nacitanie recipes z db 
const fetchRecipes = async () => {
  let recipes;
  const response = db.ref('recipes');
  const snapshot = await response.once('value');
  snapshot.forEach(childSnapshot => {
    recipes = childSnapshot.val();
  });
  return recipes;
}

export function getIngredientName(ingredientID) { // name ingredietn
  let name;
  fetchIngredience().then((res) => {
    res.map(data => {
      if (data.ingredientId == ingredientID) {
        name = data.name;
      }
    });
  });
  return name;
}

export function getIngredientUrl(ingredientID) { // touch on ingredient
  let url;
  fetchIngredience().then((res) => {
    res.map(data => {
      if (data.ingredientId == ingredientID) {
        url = data.photo_url;
      }
    });
  });
  return url;
};

export function getCategoryName(categoryId) { 
  let name;
  categories.map(data => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId) {
  const recipesArray = [];
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  fetchRecipes().then((res) => {
    res.map(data => {
      data.ingredients.map(index => {
        if (index[0] == ingredientId) {
          recipesArray.push(data);
        }
      });
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map(data => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  let ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); 
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
