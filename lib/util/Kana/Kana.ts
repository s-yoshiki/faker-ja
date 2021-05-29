interface KanaConstructor {
  hiragana? : string
}

export default class Kana extends String {
  private _hiragana: string;
  private _kanji: string;
  private _katagana: string;
  private _roman: string;
  private state: string;
  private origin: string;

  static readonly KANJI = 'kanji'
  static readonly HIRAGANA = 'hiragana'
  static readonly KATAKANA = 'katakana'
  static readonly ROMAN = 'roman'

  constructor(obj: KanaConstructor) {
    super(kana)
    this.origin = kana
    this._kanji = kana
    if (String(kanji).length > 0) {
      this._kanji = kanji
    }
  }

  public type(): string {
    return ""
  }

  public toHiragana(): Kana {
    this.state = Kana.HIRAGANA
    return new Kana("")
  }
  public toKatakana(): Kana {
    this.state = Kana.KATAKANA
    return new Kana("")
  }
  public toRoman(): Kana {
    this.state = Kana.ROMAN
    return new Kana("")
  }
  public toString(): string {
    return ""
  }
}