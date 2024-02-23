//task -1
let data = {
    Sophia:{
        id:33,
        study:[
            {
                primary: [
                    {school_name: "ABC primary school"},
                    {location: "peters burg"}
                ]               
            },
            {
                secondary:[
                    {school_name: 'ABC secondary school'},
                    {location: 'st Lorence'}
                ]
            }
        ]
    }
}

// console.log(data.Sophia.study[1].secondary[1])


//task -2

let students ={
    2222: {
        name:'jack',
        section:'C', 
        class: 'IX', 
        address: {
            "building no" : 12,
            "street" : 'St. Jonson',
            "city" : "Petersburg",
            "country" : "UK",
        }
    },

    3333:{
        name: "Herry", 
        section: "D",
        Class : 'X',
        address :{
            "building no" : 85,
            "street" : 'DC road',
            "city" : "Kachukhet",
            "country" : "Bangladesh",
        }
    }
}
// console.log(students[2222].address["city"])
// console.log(students[3333].name)
// console.log(students[3333].address["city"])


// task-3
let data2 = {
        data:[
        {
            booId: 2,
            bookDetails:{
                name: "habluder adda",
                category: "XYZ",
                price: '20$',
            },
            bookCategory: "Basic",
        },

        {
            booId: 2,
            bookDetails:{
                name: "gobluder adda",
                category: "ABC",
                price: '40$',
            },
            bookCategory: "Beginner",
        }
    ]
}

// console.log(data2.data[0].bookDetails.name)
// console.log(data2.data[1].bookCategory)


// task-4

const numbers = [1, 3, 5, 7, 9];
const even = [];
for(const num of numbers){
    const evenNumber = num + 1;
    even.push(evenNumber);
}

// console.log(even)

//or
const even2 = n => n + 1;
const result = numbers.map(even2)
// console.log(result)



//task-5
const number2 = [33, 50, 79, 78, 90, 101, 30];
const result2 =number2.filter(number2 => number2 % 10 ===0);
// console.log(result2)

// or
const selected = number2.find(number2 => number2 % 10===0);
// console.log(selected)





// task-6
const instructor =[
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'},
];

const result3 = instructor.map(ins => ins.position == 'Senior');
console.log(result3)






// task -7
const people = [
    {name: 'Meena', age:20},
    {name: 'Rina', age:15},
    {name: 'Suchorita', age:22}
];

const result4 = people.reduce((a, b) => a+b.age, 0)
// console.log(result4)



// const total = people.reduce( (acum, current) => acum + current.age, 0)
// console.log(total)


