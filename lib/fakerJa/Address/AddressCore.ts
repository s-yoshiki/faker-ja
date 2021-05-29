import addressList from "../../data/address.json";
import BaseAddressCore from "./BaseAddressCore";
import BuildingFactory from "../Building/BuildingFactory";

export default class AddressCore extends BaseAddressCore {

  constructor() {
    super()
    const row = this.generatecAddress()
    this._address = {
      zip: row[0],
      prefCode: row[1],
      district: row[2],
      districtKana: row[3],
      city: row[4],
      cityKana: row[5],
      ward: row[6],
      wardKana: row[7],
      town: row[8],
      townKana: row[9],
      chome: this.generateChome(this.getRandInt(0, 2)),
      banchi: this.generateBanchi(this.getRandInt(0, 3)),
    }
    const obj = BuildingFactory.generate()
    this._building = obj.building
    this._buildingKata = obj.buildingKata
    this._buildingHira = obj.buildingHira
    this._buildingRoman = obj.buildingRoman
  }

  private generatecAddress(): Array<string> {
    return addressList[this.getRandInt(0, addressList.length - 1)]
  }

  private generateChome(type: number): string {
    if (type === 0) {
      return ''
    }
    const n = this.getRandInt(1, 50)
    return `${n}`
  }

  private generateBanchi(type: number): Array<number> {
    let result = []
    if (type >= 1) {
      result.push(this.getRandInt(1, 999))
    }
    if (type == 2) {
      result.push(this.getRandInt(1, 100))
    }
    return result
  }
}