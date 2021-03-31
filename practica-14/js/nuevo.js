function Product(name, description, cost, clasification, percentageGain, lastSixMonthsPrice, salesByLastWeek, expirationDate) {
    this.name = name;
    this.description_ = description;
    this.cost = cost;
    this.clasification = clasification;
    this.percentageGain = percentageGain;
    
    this.lastSixMonthsPrice = lastSixMonthsPrice;
    this.salesByLastWeek = salesByLastWeek;
    this.expirationDate = expirationDate;
    this.getPrice = function(){
        return (this.cost * this.percentageGain) + this.cost;
    }
    this.getDaysExpiration = function() {
        let currentDate = new Date(), expDate = new Date(this.expirationDate);
        let days = (expDate-currentDate)/(1000 * 3600 * 24)
        return Math.floor(days);
    }
    this.getAvgPrice = function() {
        return this.lastSixMonthsPrice.reduce((accum, currentVal ) => accum + currentVal, 0)
    }
    this.sellPrice = this.getPrice();
    this.dayExpiration = this.getDaysExpiration();
    this.avgPrice = this.getAvgPrice();
}

let productsArr = [];
productsArr.push(new Product('Gansitos', 'Deliciosos', 20, 'Pansito', 0.20, [19, 19, 18, 21, 22, 15], 50, '2021/05/24'));
productsArr.push(new Product('Takis Fuego', 'Deliciosas', 13.5, 'Papita', 0.20, [15, 12, 11, 16, 14, 15], 60, '2022/02/24'));
productsArr.push(new Product('Coca-Zero', 'Muy rica coca', 15, 'Refresco de cola', 0.20, [16, 15, 16, 14, 15, 16], 5, '2021/10/15'));
productsArr.push(new Product('Nito Bimbo', 'Deliciosos', 20, 'Pansito', 0.20, [19, 19, 18, 21, 22, 15], 70, '2021/05/24'));
productsArr.push(new Product('Donas Bimbo', 'Deliciosos', 20, 'Pansito', 0.20, [19, 19, 18, 21, 22, 15], 2, '2021/05/24'));
productsArr.push(new Product('Chips Fuego', 'Deliciosas', 20, 'Papita', 0.20, [19, 19, 18, 21, 22, 15], 1000, '2022/02/24'));
productsArr.push(new Product('Pan Blanco Bimbo', 'Rico pansito', 37 , 'Pansito', 0.20, [37, 38, 39 , 35, 37, 36], 150, '2021/04/2'));

console.log(productsArr)

const getProductsBySalesLF = arr => arr.filter( product => product.salesByLastWeek > 50 )
const getProductsBySalesLT = arr => arr.filter( product => product.salesByLastWeek < 10 )
const getProductsByExpiration = arr => arr.filter( product => product.dayExpiration < 15)
