const person = {
    name: 'kodom Ali',
    job: 'badam khai',
    3: 'third',
    'add-dress' : 'kochu khet',
}
const prop = 'job'
console.log(person.job)  // dot notation
console.log(person[prop])
// console.log(person[job]) // no use
console.log(person['job'])  // bracket notation
console.log(person['3'])  // bracket notation
console.log(person["add-dress"]) // bracket notation