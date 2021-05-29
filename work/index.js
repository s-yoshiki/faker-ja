
// import {Faker} from "../dist/"

let faker = require("../dist/")


let person = faker.person.generate({
  age: {
    min: 10,
    max: 10
  }
})


console.log(person.lastName)
console.log(person.firstName)
console.log(person.lastNameHiragana)
console.log(person.firstNameHiragana)
console.log(person.lastNameRoman)
console.log(person.firstNameRoman)
console.log(person.age + '歳')
console.log(person.gender === 1 ? '男' : '女')
console.log(person.birtday)
console.log(person.blood)


const address = faker.address.generate()
let item = [
  address.zipCode,
  address.pref,
  address.prefHiragana,
  address.prefKatakana,
  address.region,
  address.regionHiragana,
  address.regionKatakana,
  address.regionRoman,
  address.chome,
  address.banchi,
  address.building,
  address.buildingKatakana,
  address.buildingRoman,
]
item.forEach(e => console.log(e))
