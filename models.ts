export interface Bill {
    customerName: string;
    items: string[];
}

export interface MenuItem {
    id: string;
    name: string;
    price: number;
}

export interface Menu {
    starters: MenuItem[]
    mainDishes: MenuItem[]
    desserts: MenuItem[]
    coffees: MenuItem[]
    beverages: MenuItem[]
    alcoholicDrinks: MenuItem[]
}

export interface ConsumedItemsByType {
    starters: number;
    mainDishes: number;
    desserts: number;
    coffees: number;
    beverages: number;
    alcoholicDrinks: number;
}

export interface BillWithTotalPrice extends Bill {
    totalPrice: number;
}

export interface BillWithConsumedTypes extends Bill {
    consumedTypes: ConsumedItemsByType;
}