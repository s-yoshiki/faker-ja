import lastNameList from "../../data/lastName.json";
import firstNameM from "../../data/firstNameM.json";
import firstNameF from "../../data/firstNameF.json";
import BasePersonCore from "./BasePersonCore"
import { getRandInt } from "../../util/random"


export interface PersonCoreConstractor {
  gender?: Array<number> | undefined,
  age?: {
    min?: number | undefined,
    max?: number | undefined,
  }
}

export class PersonCore extends BasePersonCore {

  protected arg: PersonCoreConstractor = {}

  constructor(arg: PersonCoreConstractor = {}) {
    super()
    this.arg = arg
    this.init()
  }

  private init() {
    const arg = this.arg
    // Gender
    // 0:unknown, 1:Male, 2:Female, 3:other
    let range = Array.isArray(arg.gender) ? arg.gender : []
    this.generateGender(range)
    // Age
    let ageMin = 0
    let ageMax = 100
    if (arg && arg.age) {
      ageMin = arg.age.min || 0
      ageMax = arg.age.max || 100
    }
    this.generateAge(ageMin, ageMax)
    // Last Name
    this.generateLastName()
    // First Name
    this.generateFirstName(this._gender)
    // Birthday
    this.generateBirtday()
    // Blood
    this.generateBlood()
  }

  protected generateGender(range: Array<number> = []): void {
    if (range.length === 0) {
      this._gender = this.getRandInt(0, 3)
      return
    }
    this._gender = range[this.getRandInt(0, range.length)]
  }

  protected generateAge(min: number, max: number): void {
    this._age = this.getRandInt(min, max)
  }

  protected generateLastName(): void {
    const index = this.getRandInt(0, lastNameList.length)
    this._lastName = lastNameList[index][0]
    this._lastNameHiragana = lastNameList[index][1]
  }

  protected generateFirstName(gender: number): void {
    let index: number
    if (gender === 2) {
      index = this.getRandInt(0, firstNameF.length - 1)
      this._firstName = firstNameF[index][0]
      this._firstNameHiragana = firstNameF[index][1]
    } else {
      index = this.getRandInt(0, firstNameM.length - 1)
      this._firstName = firstNameM[index][0]
      this._firstNameHiragana = firstNameM[index][1]
    }
  }

  protected generateBirtday(): void {
    const dt: Date = new Date()
    const v = new Date(
      dt.getFullYear() - this.age,
      this.getRandInt(0, 11),
      this.getRandInt(0, 28),
      this.getRandInt(0, 23),
      this.getRandInt(0, 59),
      this.getRandInt(0, 59),
    )
    const day1 = Number(Number(dt.getMonth() + 1) + "" + dt.getDate())
    const day2 = Number(Number(v.getMonth() + 1) + "" + v.getDate())
    if (day2 > day1) {
      v.setFullYear(v.getFullYear() - 1)
    }
    this._birthday = v
  }

  protected generateBlood(): void {
    let num = this.getRandInt(0, 100)
    let type = 'AB'
    if (num < 38) type = 'A'
    else if (num < 60) type = 'B'
    else if (num < 91) type = 'O'
    this._blood = type
  }
}

export default PersonCore;