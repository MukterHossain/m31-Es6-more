const products =[
    {id:1, name: 'lenovo', price: 65000},
    {id:2, name: 'dell', price: 50000},
    {id:3, name: 'hp', price: 21000},
    {id:4, name: 'mac', price: 265000},
] ;
// console.log(names)


//map
const names = products.map(products => products.name)
const price = products.map(p => p.price)
console.log(price)

// forEach
products.forEach(p => console.log(p.id))

// filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive)

// find 
const affordable = products.find(p =>p.price < 50000);
console.log(affordable)

// reduce

const total = products.reduce( (acum, current) => acum + current.price, 0)
console.log(total)