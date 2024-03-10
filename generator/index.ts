import { v4 } from 'uuid'
import fs from 'fs';

const menu = {
      "starters": [
        {"name": "Caprese Salad", "price": 8.99},
        {"name": "Bruschetta", "price": 7.50},
        {"name": "Spinach Artichoke Dip", "price": 9.99},
        {"name": "Calamari Rings", "price": 11.50},
        {"name": "Garlic Butter Shrimp", "price": 13.99},
        {"name": "Stuffed Mushrooms", "price": 8.75},
        {"name": "Spring Rolls", "price": 6.99},
        {"name": "Mozzarella Sticks", "price": 7.50},
        {"name": "Chicken Satay Skewers", "price": 10.25},
        {"name": "Nachos with Cheese and Guacamole", "price": 12.50}
      ],
      "main_dishes": [
        {"name": "Chicken Alfredo Pasta", "price": 15.99},
        {"name": "Beef Stroganoff", "price": 17.50},
        {"name": "Vegetarian Stir-Fry", "price": 13.99},
        {"name": "Grilled Salmon with Lemon Butter Sauce", "price": 19.75},
        {"name": "Spaghetti Bolognese", "price": 14.99},
        {"name": "Chicken Parmesan", "price": 16.50},
        {"name": "Shrimp Scampi", "price": 18.75},
        {"name": "Vegetable Curry", "price": 14.50},
        {"name": "Beef Chili", "price": 12.99},
        {"name": "Chicken Teriyaki with Rice", "price": 15.99},
        {"name": "Lamb Kebabs with Tzatziki", "price": 17.50},
        {"name": "Chicken Enchiladas", "price": 14.75},
        {"name": "Vegetable Lasagna", "price": 16.99},
        {"name": "Szechuan Beef with Broccoli", "price": 18.50},
        {"name": "Pork Carnitas Tacos", "price": 14.99},
        {"name": "Creamy Mushroom Risotto", "price": 15.75},
        {"name": "BBQ Pulled Pork Sandwich", "price": 12.50},
        {"name": "Seafood Paella", "price": 19.99},
        {"name": "Chicken and Dumplings", "price": 15.50},
        {"name": "Butter Chicken", "price": 16.99}
      ],
      "desserts": [
        {"name": "Chocolate Lava Cake", "price": 7.99},
        {"name": "Tiramisu", "price": 8.50},
        {"name": "New York Cheesecake", "price": 9.75},
        {"name": "Fruit Tart", "price": 7.25},
        {"name": "Crème Brûlée", "price": 8.99},
        {"name": "Apple Pie", "price": 6.50},
        {"name": "Brownie Sundae", "price": 7.75},
        {"name": "Panna Cotta", "price": 6.99},
        {"name": "Key Lime Pie", "price": 8.50},
        {"name": "Strawberry Shortcake", "price": 7.50}
      ],
      "coffee_types": [
        {"name": "Espresso", "price": 3.50},
        {"name": "Cappuccino", "price": 4.25},
        {"name": "Latte", "price": 4.50},
        {"name": "Macchiato", "price": 3.75},
        {"name": "Mocha", "price": 4.99}
      ],
      "drinks": [
        {"name": "Orange Juice", "price": 3.25},
        {"name": "Apple Juice", "price": 3.25},
        {"name": "Pineapple Juice", "price": 3.50},
        {"name": "Watermelon Juice", "price": 3.75},
        {"name": "Berry Smoothie", "price": 4.25},
        {"name": "Soda", "price": 1.99},
        {"name": "Iced Tea", "price": 2.25},
        {"name": "Lemonade", "price": 2.50},
        {"name": "Virgin Mojito", "price": 3.25},
        {"name": "Sparkling Water", "price": 2.75}
      ],
      "alcoholic_drinks": [
        {"name": "Margarita", "price": 7.50},
        {"name": "Old Fashioned", "price": 8.25},
        {"name": "Martini", "price": 9.50},
        {"name": "Moscow Mule", "price": 7.99},
        {"name": "Mojito", "price": 8.75},
        {"name": "Whiskey Sour", "price": 9.25},
        {"name": "Cosmopolitan", "price": 8.99},
        {"name": "Negroni", "price": 9.50},
        {"name": "Piña Colada", "price": 7.75},
        {"name": "Irish Coffee", "price": 8.25}
      ]
    }

// add id to menu items
const menuCategory = Object.keys(menu)
for (const category of menuCategory) {
    const items = (menu as any)[category]
    for (const item of items) {
        item.id = v4()
    }
}
  

const customers = ["Sophie Anderson", "Oliver Smith", "Ava Johnson", "William Davis", "Mia Taylor", "Noah Brown", "Isabella White", "Liam Jones", "Emily Garcia", "Ethan Wilson", "Amelia Harris", "Benjamin Moore", "Sophia Wilson", "Logan Robinson", "Olivia Carter", "James Martin", "Ava Harris", "Caleb Anderson", "Harper Baker", "Mason Turner", "Charlotte Hayes", "Jacob Reed", "Ella Brooks", "Alexander Foster", "Grace Mitchell", "Landon Hayes", "Lily Harris", "Lucas Robinson", "Aria Carter", "Jackson Taylor", "Aria Johnson", "Michael Nelson", "Scarlett Smith", "Daniel White", "Nora Hill", "Henry Lewis", "Chloe Foster", "Carter Bell", "Madison Turner", "Daniel Smith", "Aubrey Mitchell", "Jack Lee", "Stella Parker", "Eli Robinson", "Aurora Hayes", "Logan Turner", "Luna Robinson", "William Davis", "Penelope Lewis", "Ethan Carter", "Mia Turner", "Owen Robinson", "Sofia Lee", "Jackson Hayes", "Evelyn Mitchell", "Elijah Taylor", "Lily Harris", "Aiden Harris", "Abigail Turner", "Liam Martin", "Hazel Turner", "Benjamin Harris", "Ella Carter", "Sebastian Lee", "Nora Mitchell", "Lucas Harris", "Mila Bell", "Mason Turner", "Olivia Hayes", "Jackson Harris", "Luna Taylor", "Daniel Foster", "Aria Robinson", "Caleb Turner", "Stella Baker", "Christopher Hayes", "Ava Taylor", "Eli Turner", "Charlotte Harris", "Aiden Lee", "Grace Hayes", "Logan Foster", "Emily Turner", "Owen Carter", "Aurora Turner", "Noah Robinson", "Sophie Turner", "Oliver Carter", "Mia Turner", "Avery Hayes", "Carter Lee", "Ella Robinson", "Liam Turner", "Olivia Harris"]

const bills: any[] = []
for (const customer of customers) {
    const numberOfPeople = generateNumberOfPeople() 
    const meals: string[] = []
    for(let i = 0; i < numberOfPeople; i++) {
        meals.push(...generateMeal())
    }    

    const customerBill = {
        customerName: customer,
        items: meals
    }    
    bills.push(customerBill)
}



fs.writeFileSync('./bills.json', JSON.stringify(bills, undefined, 2))
fs.writeFileSync('./menu.json', JSON.stringify(menu, undefined, 2))


function generateNumberOfPeople(): number {
    const chance = Math.random()
    if(chance > 0.95) return 8;
    if(chance > 0.9) return 7;
    if(chance > 0.85) return 6;
    if(chance > 0.8) return 5;
    if(chance > 0.6) return 4;
    if(chance > 0.5) return 3;
    if(chance > 0.3) return 2;
    return 1;
}


function generateMeal() : string[] {
    const hasStarter = Math.random() > 0.5
    const hasMainMeal = Math.random() > 0.2
    const hasDessert = hasMainMeal || hasStarter ? Math.random() > 0.5 : Math.random() > 0.8
    const hasAlcoholicDrink = hasMainMeal ? Math.random() > 0.8 : (!(hasStarter || hasMainMeal || hasDessert) ? true : Math.random() > 0.8)
    const hasNonAlcoholicDrink = hasAlcoholicDrink ? Math.random() > 0.9 : Math.random() > 0.2
    const hasCoffee = hasDessert ? Math.random() > 0.2 : Math.random() > 0.8

    const starterAmount = hasStarter ? (Math.random() > 0.8 ? 2 : 1) : 0;
    const mainMealAmount = hasMainMeal ? (Math.random() > 0.8 ? 2 : 1) : 0;
    const desertAmount = hasDessert ? (Math.random() > 0.8 ? 2 : 1) : 0;
    const nonAlcoholicDrinkAmount = hasNonAlcoholicDrink ? Math.floor(Math.random() * 3) + 1 : 0
    const alcoholicDrinkAmount = hasAlcoholicDrink ? Math.floor(Math.random() * 3) + 1 : 0
    const coffeeAmount = hasCoffee ? (Math.random() > 0.8 ? 2 : 1) : 0;

    const starters = getItem('starters', starterAmount)
    const mainDishes = getItem('main_dishes', mainMealAmount)
    const desserts = getItem('desserts', desertAmount)
    const coffees = getItem('coffee_types', coffeeAmount)
    const drinks = getItem('drinks', nonAlcoholicDrinkAmount)
    const alcoholicDrinks = getItem('alcoholic_drinks', alcoholicDrinkAmount)

    return [...starters, ...mainDishes, ...desserts, ...coffees, ...drinks, ...alcoholicDrinks]
    
}

function getItem(kind: string, amount: number) {
    const result: string[] = []
    for(let i = 0; i < amount; i++) {
        const items:any[] = (menu as any)[kind]
        const itemsAmount = items.length
        const randomItem = Math.floor(Math.random() * itemsAmount)
        result.push(items[randomItem].id)
    }
    return result
}


