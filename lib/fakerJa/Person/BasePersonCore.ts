import BaseCore from "../BaseCore"
import hiragana2roman from "../../util/hiragana2roman";
import hiragana2katakana from "../../util/hiragana2katakana";

export default class BasePersonCore extends BaseCore {
  protected _gender: number = 0;
  protected _age: number = 0;
  protected _firstName: string = "";
  protected _firstNameHiragana: string = "";
  protected _lastName: string = "";
  protected _lastNameHiragana: string = "";
  protected _birthday: Date = new Date();
  protected _blood: string = "";

  get firstName(): string {
    return this._firstName
  }
  get lastName(): string {
    return this._lastName
  }
  get firstNameHiragana(): string {
    return this._firstNameHiragana
  }
  get lastNameHiragana(): string {
    return this._lastNameHiragana
  }
  get firstNameKatakana(): string {
    return hiragana2katakana(this._firstNameHiragana)
  }
  get lastNameKatakana(): string {
    return hiragana2katakana(this._lastNameHiragana)
  }
  get firstNameRoman(): string {
    return hiragana2roman(this._firstNameHiragana)
  }
  get lastNameRoman(): string {
    return hiragana2roman(this._lastNameHiragana)
  }
  get gender(): number {
    return this._gender
  }
  get age(): number {
    return this._age
  }
  get birtday(): Date {
    return this._birthday
  }
  get blood(): string {
    return this._blood
  }
}