import { getPrefById, getPrefKanaById } from "../../util/pref"
import hiragana2roman from "../../util/hiragana2roman";
import hiragana2katakana from "../../util/hiragana2katakana";
import BaseCore from "../BaseCore"

export default class BaseAddressCore extends BaseCore {
  protected _address: any = {
    zip: '',
    prefCode: '',
    district: '',
    districtKana: '',
    city: '',
    cityKana: '',
    ward: '',
    wardKana: '',
    town: '',
    townKana: '',
    chome: '',
    banchi: [0],
  }
  protected _building: string = ''
  protected _buildingHira: string = ''
  protected _buildingKata: string = ''
  protected _buildingRoman: string = ''

  /**
   * @return {string} 郵便番号
   */
  get zipCode(): string {
    return this._address.zip
  }

  /**
   * @return {string} 県名
   */
  get pref(): string {
    return getPrefById(this.prefCode)
  }
  /**
   * @return {string} 県名ひらがな
   */
  get prefHiragana(): string {
    return getPrefKanaById(this.prefCode)
  }
  /**
   * @return {string} 県名カタカナ
   */
  get prefKatakana(): string {
    return hiragana2katakana(this.prefHiragana)
  }
  /**
   * @return {string} 県名ローマ
   */
  get prefRoman(): string {
    return hiragana2roman(this.prefHiragana)
  }
  /**
   * @return {string} 郵便番号
   */
  get prefCode(): string {
    return this._address.prefCode
  }
  /**
   * @return {string} 地域名
   */
  get region(): string {
    return [
      this.district,
      this.city,
      this.ward,
      this.town,
    ].join('')
  }
  /**
   * @return {string} 地域名ひらがな
   */
  get regionHiragana(): string {
    return [
      this.districtHiragana,
      this.cityHiragana,
      this.wardHiragana,
      this.townHiragana,
    ].join('')
  }
  /**
   * @return {string} 地域名カタカナ
   */
  get regionKatakana(): string {
    return hiragana2katakana(this.regionHiragana)
  }
  /**
   * @return {string} 地域名ローマ
   */
  get regionRoman(): string {
    return [
      this.districtRoman,
      this.cityRoman,
      this.wardRoman,
      this.townRoman,
    ].join(' ').replace(/\s+/g, ' ').trim()
  }
  /**
   * @return {string} 郡名
   */
  get district(): string {
    return this._address.district
  }
  /**
   * @return {string} 郡名かな
   */
  get districtHiragana(): string {
    return this._address.districtKana
  }
  /**
   * @return {string} 郡名カナ
   */
  get districtKatkana(): string {
    return hiragana2katakana(this.districtHiragana)
  }
  /**
   * @return {string} 郡名ローマ
   */
  get districtRoman(): string {
    return hiragana2roman(this.districtHiragana)
  }
  /**
   * @return {string} 市
   */
  get city(): string {
    return this._address.city
  }
  /**
   * @return {string} 市かな
   */
  get cityHiragana(): string {
    return this._address.cityKana
  }
  /**
   * @return {string} 市カナ
   */
  get cityKatkana(): string {
    return hiragana2katakana(this.cityHiragana)
  }
  /**
   * @return {string} 市ローマ
   */
  get cityRoman(): string {
    return hiragana2roman(this.cityHiragana)
  }
  /**
   * @return {string} 区
   */
  get ward(): string {
    return this._address.ward
  }
  /**
   * @return {string} 区かな
   */
  get wardHiragana(): string {
    return this._address.wardKana
  }
  /**
   * @return {string} 区カナ
   */
  get wardKatkana(): string {
    return hiragana2katakana(this.wardHiragana)
  }
  /**
   * @return {string} 区ローマ
   */
  get wardRoman(): string {
    return hiragana2roman(this.wardHiragana)
  }
  /**
   * @return {string} 町域
   */
  get town(): string {
    return this._address.town
  }
  /**
   * @return {string} 町域かな
   */
  get townHiragana(): string {
    return this._address.townKana
  }
  /**
   * @return {string} 町域カナ
   */
  get townKatkana(): string {
    return hiragana2katakana(this.townHiragana)
  }
  /**
   * @return {string} 町域ローマ
   */
  get townRoman(): string {
    return hiragana2roman(this.townHiragana)
  }
  /**
   * @return {string} 丁目
   */
  get chome(): string {
    if (this._address.chome.length === 0) return ''
    return `${this._address.chome}丁目`
  }
  /**
   * @return {string} 丁目かな
   */
  get chomeHiragana(): string {
    if (this._address.chome.length === 0) return ''
    return `${this._address.chome}ちょうめ`
  }
  /**
   * @return {string} 丁目カナ
   */
  get chomeKatakana(): string {
    if (this._address.chome.length === 0) return ''
    return `${this._address.chome}チョウメ`
  }
  /**
   * @return {string} 丁目ローマ
   */
  get chomeRoman(): string {
    if (this._address.chome.length === 0) return ''
    return `${this._address.chome} chome`
  }
  /**
   * @return {string} 番地
   */
  get banchi(): string {
    const item = this._address.banchi
    switch (item.length) {
      case 1:
        return `${item[0]}番地`
      case 2:
        return `${item[0]}番地${item[1]}号`
      default:
        return ''
    }
  }
  /**
   * @return {string} 番地かな
   */
  get banchiHiragana(): string {
    const item = this._address.banchi
    switch (item.length) {
      case 1:
        return `${item[0]}ばんち`
      case 2:
        return `${item[0]}ばんち${item[1]}ごう`
      default:
        return ''
    }
  }
  /**
   * @return {string} 番地カナ
   */
  get banchiKatakana(): string {
    const item = this._address.banchi
    switch (item.length) {
      case 1:
        return `${item[0]}バンチ`
      case 2:
        return `${item[0]}バンチ${item[1]}ゴウ`
      default:
        return ''
    }
  }
  /**
   * @return {string} 番地ローマ
   */
  get banchiRoman(): string {
    const item = this._address.banchi
    switch (item.length) {
      case 1:
        return `${item[0]} banchi`
      case 2:
        return `${item[0]} banchi ${item[1]} gou`
      default:
        return ''
    }
  }
  /**
   * @return {string} ビル名
   */
  get building() :string {
    return this._building
  }
  /**
   * @return {string} ビル名ひらがな
   */
  get buildingHiragana() :string {
    return this._buildingHira
  }
  /**
   * @return {string} ビル名カタカナ
   */
  get buildingKatakana() :string {
    return this._buildingKata
  }
  /**
   * @return {string} ビル名ローマ
   */
  get buildingRoman() :string {
    return this._buildingRoman
  }
}