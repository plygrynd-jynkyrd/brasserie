import 'mocha';
import { getBillWithPrices, getBillGroupedByTypes, getBillWithTheMostBeverageAmount, getBillsWithoutStarterOrMainDishes, getBillsWithLasagnaButWithoutCoffeeUnder100 } from '.'
import { Bill, BillWithTotalPrice, BillWithConsumedTypes } from './models'
import assert from 'assert';

describe("Bill tests" , () => {
    it.skip("should get bills with lasagna, but without coffee and less than $100", () => {
        const result: Bill[] = getBillsWithLasagnaButWithoutCoffeeUnder100()
       
         assert.equal(result.length, 8)
     })

    it.skip("should get bills without starter or main dishes", () => {
       const result = getBillsWithoutStarterOrMainDishes()

        assert.equal(result.length, 4)
        assert.equal(result.filter((bill) => bill.customerName === "Jacob Reed").length, 1)
        assert.equal(result.filter((bill) => bill.customerName === "Aria Johnson").length, 1)
        assert.equal(result.filter((bill) => bill.customerName === "Lily Harris").length, 1)
        assert.equal(result.filter((bill) => bill.customerName === "Mason Turner").length, 1)
    })

    it.skip("should set prices in the bills", () => {
        const result:BillWithTotalPrice[] = getBillWithPrices()

        const customerA = result.find((b) => b.customerName === "Stella Parker")
        const customerB = result.find((b) => b.customerName === "Eli Turner")
        const customerC = result.find((b) => b.customerName === "Oliver Carter")

        assert.equal(Math.floor(customerA?.totalPrice || 0),307)
        assert.equal(Math.floor(customerB?.totalPrice || 0),125)
        assert.equal(Math.floor(customerC?.totalPrice || 0),17)
    })

    it.skip("should get the bill with the most beverage amount", () => {
        const bill: Bill = getBillWithTheMostBeverageAmount()
        assert.equal(bill.customerName, "Stella Parker")
    })

    it.skip("should group the bills by menu types", () => {
        const result:BillWithConsumedTypes[] = getBillGroupedByTypes()

        const customerA = result.find((b) => b.customerName === "Abigail Turner")
        const customerB = result.find((b) => b.customerName === "Ethan Carter")
        const customerC = result.find((b) => b.customerName === "Madison Turner")

        assert.equal(Math.floor(customerA?.consumedTypes.starters || 0),1)
        assert.equal(Math.floor(customerA?.consumedTypes.beverages || 0),3)
        assert.equal(Math.floor(customerB?.consumedTypes.mainDishes || 0),1)
        assert.equal(Math.floor(customerB?.consumedTypes.alcoholicDrinks || 0),3)
        assert.equal(Math.floor(customerC?.consumedTypes.starters || 0),2)
        assert.equal(Math.floor(customerC?.consumedTypes.mainDishes || 0),4)
    })
})


