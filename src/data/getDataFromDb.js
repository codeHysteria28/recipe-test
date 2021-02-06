import firebase from 'firebase';
import {firebaseConfig} from '../firebase';

if(!firebase.apps.length) {
    // initialiaze firebase
    firebase.initializeApp(firebaseConfig);
}
  
const db = firebase.database();

// get all recipes
export function getRecipesFromDb(){
    let recipes;
    try{
      // recipes
      db.ref('recipes').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            recipes = childSnapshot.val();
        });
      });
      return recipes;
    }catch(err){
      console.log(err);
    }
}

// get number of recipes
export function getNumberOfRecipes(categoryID){
    let count = 0;
    let recipes;

    db.ref('recipes').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            recipes = childSnapshot.val();
        })
    });

    recipes.map(data => {
        if (data.categoryId == categoryID) {
            count++;
        }
    });
    return count;
}

// get all ingredience
export function getIngredientsFromDb() {
    let ingredients;
    // recipes
    db.ref('ingredients').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            ingredients = childSnapshot.val();
        });
    });

    return ingredients;
};

export function getAllIngredients(idArray) {
    let ingredientsArray = [];
    let ingredients;
    // recipes
    db.ref('ingredients').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            ingredients = childSnapshot.val();
        });
    });
    
    idArray.map(index => {
      ingredients.map(data => {
        if (data.ingredientId == index[0]) {
          ingredientsArray.push([data, index[1]]);
        }
      });
    });
    
    return ingredientsArray;
  }

// get all categories
export function getCategoriesFromDb(){
    let category;
    db.ref('categories').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            category = childSnapshot.val();
        });
    });
    return category;
}

// get category name
export function getCategoryName(categoryId){
    let arr;
    let name;
    db.ref('categories').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            arr = childSnapshot.val();
        });
    });

    arr.map(data => {
        if(data.id === categoryId) { 
            name = data.name;
        }
    });
    return name;
}

export function getCategoryById(categoryId) { // ID
    let category;

    db.ref('categories').on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
            category = childSnapshot.val();
        });
    });
  
    category.map(data => {
      if (data.id === categoryId) {
        category = data;
      }
    });
    return category;
  }