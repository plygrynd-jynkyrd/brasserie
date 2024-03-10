import fs from 'fs'
import { Menu, MenuItem, Bill, BillWithTotalPrice, BillWithConsumedTypes } from './models'
 
export const menu: Menu = JSON.parse(fs.readFileSync('./database/menu.json', 'utf-8'))
export const bills: Bill[] = JSON.parse(fs.readFileSync('./database/bills.json', 'utf-8'))

// Dish name: "Vegetable Lasagna"
export function getBillsWithLasagnaButWithoutCoffeeUnder100(): Bill[] {
    const filteredBills: Bill[] = []

    return filteredBills;
}

export function getBillsWithoutStarterOrMainDishes(): Bill[] {
    const filteredBills: Bill[] = []

    return filteredBills;
}

export function getBillWithTheMostBeverageAmount(): Bill {
    const willWithMostBeverage: Bill = {
        customerName: "",items: []
    }

    return willWithMostBeverage;
}

export function getBillWithPrices(): BillWithTotalPrice[] {
    const billsWithPrices: BillWithTotalPrice[] = []

    return billsWithPrices;
}

export function getBillGroupedByTypes(): BillWithConsumedTypes[] {
    const billsWithConsumedTypes: BillWithConsumedTypes[] = []

    return billsWithConsumedTypes;
}


