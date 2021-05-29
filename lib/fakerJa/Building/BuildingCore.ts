import lastName from "../../data/lastName.json";
import hira2roman from "../../util/hiragana2roman";
import hira2kata from "../../util/hiragana2katakana";
import BaseBuildingCore from "./BaseBuildingCore"

export interface BuildingCoreConstructor {
  apartment?: boolean,
  office?: boolean,
  commercial?: boolean,
}

const apartmentPrefix: Array<string> = [
  'あーばん',
  'いーすと',
  'うぇすと',
  'ぐりーん',
  'さうす',
  'さにー',
  'すかい',
  'それーゆ',
  'だうん',
  'とっぷ',
  'のーす',
  'ぱーく',
  'ふぁいん',
  'ふぉれすと',
]

const apartmentBody: Array<string> = [
  'あくしす',
  'あべにゅー',
  'くれすと',
  'こーと',
  'こーぽ',
  'せざーる',
  'はいつ',
  'はいむ',
  'はうす',
  'ぱれす',
  'ひる',
  'ひるず',
  'びれっじ',
  'めぞん',
  'りばーさいど',
  'れじでんす',
  'ろっじ',
  'がーでん',
]

export default class BuildingCore extends BaseBuildingCore {

  constructor(obj: BuildingCoreConstructor) {
    super()
    this.init()
  }

  public init() {
    let prefixKata: string = ''
    let prefixHira: string = ''
    prefixHira = apartmentPrefix[this.getRandInt(0, apartmentPrefix.length)]
    prefixKata = hira2kata(prefixHira)
    const [region, regionHira] = lastName[this.getRandInt(0, lastName.length)]
    const regionKata = hira2kata(regionHira)
    const bodyHira = apartmentBody[this.getRandInt(0, apartmentBody.length)]
    const bodyKata = hira2kata(bodyHira)
    this._building = `${prefixKata}${bodyKata}${region}`
    this._buildingHira = `${prefixHira}${bodyHira}${regionHira}`
    this._buildingKata = `${prefixKata}${bodyKata}${regionKata}`
    this._buildingRoman = [prefixHira, bodyHira, regionHira].filter(e => e.length > 0).map(hira2roman).join(' ')
  }
}
