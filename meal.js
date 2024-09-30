const entree1 = {
    starter: "Bacon Cheese Fries",
    main: "Beef Burger and Coleslaw",
    dessert: "Deep Fried Ice-Cream"
};

const entree2 = {
    starter: "Smoked Salmon On Rye",
    main: "Vegetarian Couscous Rolls",
    dessert: "Fruit Plate"
};

const entree3 = {
    starter: "Chips and Hummus",
    main: "Grilled Chicken in Hot Sauce",
    dessert: "Chocolate Ganache Cake"
};

const entree4 = {
    starter: "Bread Rolls and Butter",
    main: "Chicken and Noodles",
    dessert: "Banana Bread"
};

const entree5 = {
    starter: "Soft Pretzels and Cheese",
    main: "Double Cheeseburger",
    dessert: "Slice of Cheesecake"
};


const meals = [entree1, entree2, entree3, entree4, entree5];


const showMeal = (mealNumber) => {
    let meal = meals[mealNumber];
    let str = `Start with ${meals[mealNumber].starter}, followed by ${meals[mealNumber].main}, and finish off your meal with ${meals[mealNumber].dessert}`;
    let area = document.querySelector('.randomMeal');
    area.innerHTML = str;
    console.log("Today's random meal is:", meal);

}

const randomMeal = function() {
    let mealNumber = Math.floor(Math.random() * meals.length);
    showMeal(mealNumber);

    
}

randomMeal();