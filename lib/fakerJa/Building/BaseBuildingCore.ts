import BaseCore from "../BaseCore"

export default class BaseBuildCore extends BaseCore {
  protected args: any
  protected _building: string
  protected _buildingHira: string
  protected _buildingKata: string
  protected _buildingRoman: string

  constructor() {
    super()
    this._building = ''
    this._buildingHira = ''
    this._buildingKata = ''
    this._buildingRoman = ''
  }

  get building(): string {
    return this._building
  }
  get buildingHira(): string {
    return this._buildingHira
  }
  get buildingKata(): string {
    return this._buildingKata
  }
  get buildingRoman(): string {
    return this._buildingRoman
  }
}