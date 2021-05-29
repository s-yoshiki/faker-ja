import AddressFactory from "../lib/fakerJa/Address/AddressFactory"
import AddressCore from "../lib/fakerJa/Address/AddressCore"
import BuildingCore from "../lib/fakerJa/Building/BuildingCore"
import addressList from "../lib/data/address.json";
import hira2roman from "../lib/util/hiragana2roman";
import hira2kata from "../lib/util/hiragana2katakana";
import { getPrefById, getPrefKanaById } from "../lib/util/pref";


const overrideMethod = (method: any, arg: any) => {
  return jest.spyOn(AddressCore.prototype, method).mockImplementation(arg);
}

// for coverage
const ignoreBuilding = () => {
  jest.spyOn(BuildingCore.prototype, 'init').mockImplementation(() => {});
}


describe('PersonFactory', () => {
  test('PersonFactory#generate', () => {
    ignoreBuilding()
    const obj = AddressFactory.generate()
    expect(obj.constructor.name).toBe('AddressCore')
  })
  test('Address getter methods test', () => {
    ignoreBuilding()
    const INDEX = 0
    // const row = addressList[INDEX]
    const row = [
      "0040003",
      "01",
      "あああ郡",
      "あああぐん",
      "札幌市",
      "さっぽろし",
      "厚別区",
      "あつべつく",
      "厚別東三条",
      "あつべつひがし3じょう"
    ]
    const spy1 = overrideMethod('generatecAddress', () => row)
    let obj = new AddressCore();
    const ans = [
      [obj.zipCode, row[0]],
      [obj.prefCode, row[1]],
      [obj.pref, getPrefById(row[1])],
      [obj.prefHiragana, getPrefKanaById(row[1])],
      [obj.prefKatakana, hira2kata(getPrefKanaById(row[1]))],
      [obj.prefRoman, hira2roman(getPrefKanaById(row[1]))],
      [obj.region, [row[2], row[4], row[6], row[8]].join('')],
      [obj.regionHiragana, [row[3], row[5], row[7], row[9]].join('').trim()],
      [obj.regionKatakana, hira2kata([row[3], row[5], row[7], row[9]].join('').trim())],
      [obj.regionRoman, hira2roman([row[3], row[5], row[7], row[9]].join(' ').trim())],
      [obj.districtKatkana, hira2kata(row[3])],
      [obj.cityKatkana, hira2kata(row[5])],
      [obj.wardKatkana, hira2kata(row[7])],
      [obj.townKatkana, hira2kata(row[9])],
      // 
      [obj.building, ""],
      [obj.buildingHiragana, ""],
      [obj.buildingKatakana, ""],
      [obj.buildingRoman, ""],
    ]
    ans.forEach(e => expect(e[0]).toBe(e[1]))
    expect(spy1).toHaveBeenCalled();
  })
  test('Address Address detail test1', () => {
    ignoreBuilding()
    const INDEX = 0
    const spy = overrideMethod('getRandInt', (a: number, b: number) => INDEX)
    let obj = new AddressCore();
    const ans = [
      [obj.chome, ""],
      [obj.chomeHiragana, ""],
      [obj.chomeKatakana, ""],
      [obj.chomeRoman, ""],
      [obj.banchi, ""],
      [obj.banchiHiragana, ""],
      [obj.banchiKatakana, ""],
      [obj.banchiRoman, ""],
    ]
    ans.forEach(e => expect(e[0]).toBe(e[1]))
    expect(spy).toHaveBeenCalled();
  })
  test('Address Address detail test2', () => {
    ignoreBuilding()
    const INDEX = 1
    const spy = overrideMethod('getRandInt', (a: number, b: number) => INDEX)
    let obj = new AddressCore();
    const ans = [
      [obj.chome, `${INDEX}丁目`],
      [obj.chomeHiragana, `${INDEX}ちょうめ`],
      [obj.chomeKatakana, `${INDEX}チョウメ`],
      [obj.chomeRoman, `${INDEX} chome`],
      [obj.banchi, `${INDEX}番地`],
      [obj.banchiHiragana, `${INDEX}ばんち`],
      [obj.banchiKatakana, `${INDEX}バンチ`],
      [obj.banchiRoman, `${INDEX} banchi`],
    ]
    ans.forEach(e => expect(e[0]).toBe(e[1]))
    expect(spy).toHaveBeenCalled();
  })
  test('Address Address detail test3', () => {
    ignoreBuilding()
    const INDEX = 2
    const spy = overrideMethod('getRandInt', (a: number, b: number) => INDEX)
    let obj = new AddressCore();
    const ans = [
      [obj.banchi, `${INDEX}番地${INDEX}号`],
      [obj.banchiHiragana, `${INDEX}ばんち${INDEX}ごう`],
      [obj.banchiKatakana, `${INDEX}バンチ${INDEX}ゴウ`],
      [obj.banchiRoman, `${INDEX} banchi ${INDEX} gou`],
    ]
    ans.forEach(e => expect(e[0]).toBe(e[1]))
    expect(spy).toHaveBeenCalled();
  })
})