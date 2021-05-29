import AddressFactory from "../lib/fakerJa/Address/AddressFactory"
import AddressCore from "../lib/fakerJa/Address/AddressCore"
import BuildingCore from "../lib/fakerJa/Building/BuildingCore"
import addressList from "../lib/data/address.json";
import hira2roman from "../lib/util/hiragana2roman";
import hira2kata from "../lib/util/hiragana2katakana";
import { getPrefById, getPrefKanaById } from "../lib/util/pref";


const overrideMethod = (method: any, arg: any) => {
  return jest.spyOn(BuildingCore.prototype, method).mockImplementation(arg);
}

describe('PersonFactory', () => {
  test('Address getter methods test', () => {
    const INDEX = 0
    const spy = overrideMethod('getRandInt', (a: number, b: number) => INDEX)
    let row = [1,1,1]
    let obj = new BuildingCore({});
    const ans = [
      [obj.building, "アーバンアクシス佐藤"],
      [obj.buildingHira, "あーばんあくしすさとう"],
      [obj.buildingKata, "アーバンアクシスサトウ"],
      [obj.buildingRoman, "a-ban akushisu satou"],
    ]
    ans.forEach(e => expect(e[0]).toBe(e[1]))
    expect(spy).toHaveBeenCalled();
  })
})