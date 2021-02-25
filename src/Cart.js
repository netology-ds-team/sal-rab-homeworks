class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.discountSettings = { minSum: 1000, part: 10 };
        this.shippingSettings = { minForFree: 1000, price: 200 };
        this.total = {
            discount: 0,
            shipping: 0,
            total: 0,
            freeShipping: false
        };
    }

    findIndexById(id) {
        return this.items.findIndex((item) => item.id === id);
    }

    getById(id) {
        const index = this.findIndexById(id);
        return (index > -1) ? this.items[index] : null;
    }

    addProduct(product = {}, count = 1) {
        const item = this.getById(product.id);
        if (item) {
            item.count += count;
        } else {
            this.items.push({...product, count});
        }
        this.calcTotal()
    }

    removeById(id) {
        this.items.splice(this.findIndexById(id), 1);
        this.calcTotal()
    }

    get sum() {
        return this.items.reduce((acc, item) => acc + item.count * item.price, 0);
    }

    calcTotal() {
        try {
            this.total = calcInvoice({
                sum: this.sum,
                discountMinSum: this.discountSettings.minSum,
                discountPart: this.discountSettings.part,
                shippingFreeMinSum: this.shippingSettings.minForFree,
                shippingPrice: this.shippingSettings.price,
            })
        } catch {
            this.total = {
                discount: 0,
                shipping: 0,
                total: this.sum,
                freeShipping: false
            }
        }
    }
}
