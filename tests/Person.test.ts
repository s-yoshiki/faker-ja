import PersonFactory from "../lib/fakerJa/Person/PersonFactory"
import PersonCore from "../lib/fakerJa/Person/PersonCore"
import lastName from "../lib/data/lastName.json";
import firstNameM from "../lib/data/firstNameM.json";
import firstNameF from "../lib/data/firstNameF.json";
import hira2roman from "../lib/util/hiragana2roman";
import hira2kata from "../lib/util/hiragana2katakana";

const overrideMethod = (method: any, arg: any) => {
  return jest.spyOn(PersonCore.prototype, method).mockImplementation(arg);
}

describe('PersonFactory', () => {
  test('PersonFactory#generate', () => {
    const obj = PersonFactory.generate()
    expect(obj.constructor.name).toBe('PersonCore')
  })
  test('Male pattern', () => {
    // Male
    const INDEX = 1
    const spy = overrideMethod('getRandInt', (a:number, b:number) => INDEX)
    let obj = new PersonCore();
    expect(obj.gender).toBe(INDEX)
    expect(obj.age).toBe(INDEX)
    expect(obj.blood).toBe('A')
    expect(obj.firstName).toBe(firstNameM[INDEX][0])
    expect(obj.firstNameHiragana).toBe(firstNameM[INDEX][1])
    expect(obj.firstNameKatakana).toBe(hira2kata(firstNameM[INDEX][1]))
    expect(obj.firstNameRoman).toBe(hira2roman(firstNameM[INDEX][1]))
    expect(obj.lastName).toBe(lastName[INDEX][0])
    expect(obj.lastNameHiragana).toBe(lastName[INDEX][1])
    expect(obj.lastNameKatakana).toBe(hira2kata(lastName[INDEX][1]))
    expect(obj.lastNameRoman).toBe(hira2roman(lastName[INDEX][1]))
    expect(spy).toHaveBeenCalled();
  })
  test('Female pattern', () => {
    // female
    const INDEX = 2
    const spy = overrideMethod('getRandInt', (a:number, b:number) => INDEX)
    let obj = new PersonCore();
    expect(obj.gender).toBe(INDEX)
    expect(obj.firstName).toBe(firstNameF[INDEX][0])
    expect(obj.firstNameHiragana).toBe(firstNameF[INDEX][1])
    expect(obj.firstNameKatakana).toBe(hira2kata(firstNameF[INDEX][1]))
    expect(obj.firstNameRoman).toBe(hira2roman(firstNameF[INDEX][1]))
    expect(spy).toHaveBeenCalled();
  })
  test('Bloodtype', () => {
    // A
    let spy = overrideMethod('getRandInt', (a:number, b:number) => 37)
    let obj = new PersonCore();
    expect(obj.blood).toBe('A')
    expect(spy).toHaveBeenCalled();
    jest.clearAllMocks()
    // B
    spy = overrideMethod('getRandInt', (a:number, b:number) => 38)
    obj = new PersonCore();
    expect(obj.blood).toBe('B')
    expect(spy).toHaveBeenCalled();
    jest.clearAllMocks()
    spy = overrideMethod('getRandInt', (a:number, b:number) => 59)
    obj = new PersonCore();
    expect(obj.blood).toBe('B')
    expect(spy).toHaveBeenCalled();
    jest.clearAllMocks()
    // O
    spy = overrideMethod('getRandInt', (a:number, b:number) => 60)
    obj = new PersonCore();
    expect(obj.blood).toBe('O')
    expect(spy).toHaveBeenCalled();
    jest.clearAllMocks()
    spy = overrideMethod('getRandInt', (a:number, b:number) => 90)
    obj = new PersonCore();
    expect(obj.blood).toBe('O')
    expect(spy).toHaveBeenCalled();
    jest.clearAllMocks()
    // AB
    spy = overrideMethod('getRandInt', (a:number, b:number) => 91)
    obj = new PersonCore();
    expect(obj.blood).toBe('AB')
    expect(spy).toHaveBeenCalled();
    jest.clearAllMocks()
  })
  test('PersonCore Constractor test', () => {
    let spy = overrideMethod('getRandInt', (min:number, max:number) : number => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min)
    })
    let obj = new PersonCore({
      age: {
        min: 200,
        max: 200
      },
      gender: [100]
    });
    expect(obj.age).toBe(200)
    expect(obj.gender).toBe(100)
    // デフォルト max
    obj = new PersonCore({
      age: {
        min: 100
      },
    });
    expect(obj.age).toBe(100)
    // デフォルト min
    obj = new PersonCore({
      age: {
        max: 1
      },
    });
    expect(obj.age).toBe(0)
  })
  test('PersonCore Date test', () => {
    let spy = overrideMethod('getRandInt', (a:number, b:number) => 1)
    let obj = new PersonCore();
    const current: Date = new Date()
    expect(obj.birtday.getFullYear()).toBe(current.getFullYear() - obj.age)
    expect(spy).toHaveBeenCalled();
    spy = overrideMethod('getRandInt', (a:number, b:number) => 13)
    obj = new PersonCore();
    expect(obj.birtday.getFullYear() - 1).toBe(current.getFullYear() - obj.age)
    expect(spy).toHaveBeenCalled();
    // spy.mockReset()
    // spy.mockRestore()
  })
  
})