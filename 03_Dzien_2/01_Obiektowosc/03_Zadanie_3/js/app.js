const inputName = document.querySelector("#name");
const inputProteins = document.querySelector("#proteins");
const inputCarbs = document.querySelector("#carbs");
const inputFat = document.querySelector("#fat");
const submitButton = document.querySelector(".btn");
const productsList = document.querySelector("#products");

const foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  getCalories() {
    return this.protein * 4 + this.fat * 9 + this.carbs * 4;
  }

  print() {
    return 'Produkt: ' + this.name + ', Kalorie: ' + this.getCalories();
  }
}
class FastFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
}
class FatFreeFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const name = inputName.value;
  const proteins = inputProteins.value;
  const carbs = inputCarbs.value;
  const fat = inputFat.value;

  const calories = proteins * 4 + carbs * 4 + fat * 9;

  let food;

  if(calories > 250) {
    food = new FastFood(name, proteins, carbs, fat);
  } else {
    food = new FatFreeFood(name, proteins, carbs, fat);
  }
  foods.push(food);
  console.log(foods);


  const myLi = document.createElement("li");
  myLi.innerText = food.print();
  productsList.appendChild(myLi);
})