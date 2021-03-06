import h2k from "../lib/util/hiragana2katakana"
import h2r from "../lib/util/hiragana2roman"
import { getPrefById, getPrefKanaById } from "../lib/util/pref"

test('hiragana2katakana', () => {
  const src: string = `愛あいうえおかさたなはまやらわをんがざばぱぁっー〜`
  const dst: string = `愛アイウエオカサタナハマヤラワヲンガザバパァッー〜`
  expect(h2k(src)).toBe(dst)
})

test('hiragana2roman', () => {
  const src: string = `ai愛あいうえお かきくけこ さたなはまやらわをん が ざ ば ぱ あっと っい っ でぃずにー〜`
  const dst: string = `ai愛aiueo kakikukeko satanahamayarawawon ga za ba pa atto xtsui xtsu dexizuni-〜`
  expect(h2r(src)).toBe(dst)
})


test('getPrefById', () => {
  expect(getPrefById('01')).toBe('北海道')
  expect(getPrefById('02')).toBe('青森県')
  expect(getPrefById('03')).toBe('岩手県')
  expect(getPrefById('04')).toBe('宮城県')
  expect(getPrefById('05')).toBe('秋田県')
  expect(getPrefById('06')).toBe('山形県')
  expect(getPrefById('07')).toBe('福島県')
  expect(getPrefById('08')).toBe('茨城県')
  expect(getPrefById('09')).toBe('栃木県')
  expect(getPrefById('10')).toBe('群馬県')
  expect(getPrefById('11')).toBe('埼玉県')
  expect(getPrefById('12')).toBe('千葉県')
  expect(getPrefById('13')).toBe('東京都')
  expect(getPrefById('14')).toBe('神奈川県')
  expect(getPrefById('15')).toBe('新潟県')
  expect(getPrefById('16')).toBe('富山県')
  expect(getPrefById('17')).toBe('石川県')
  expect(getPrefById('18')).toBe('福井県')
  expect(getPrefById('19')).toBe('山梨県')
  expect(getPrefById('20')).toBe('長野県')
  expect(getPrefById('21')).toBe('岐阜県')
  expect(getPrefById('22')).toBe('静岡県')
  expect(getPrefById('23')).toBe('愛知県')
  expect(getPrefById('24')).toBe('三重県')
  expect(getPrefById('25')).toBe('滋賀県')
  expect(getPrefById('26')).toBe('京都府')
  expect(getPrefById('27')).toBe('大阪府')
  expect(getPrefById('28')).toBe('兵庫県')
  expect(getPrefById('29')).toBe('奈良県')
  expect(getPrefById('30')).toBe('福岡県')
  expect(getPrefById('31')).toBe('鳥取県')
  expect(getPrefById('32')).toBe('島根県')
  expect(getPrefById('33')).toBe('岡山県')
  expect(getPrefById('34')).toBe('広島県')
  expect(getPrefById('35')).toBe('山口県')
  expect(getPrefById('36')).toBe('徳島県')
  expect(getPrefById('37')).toBe('香川県')
  expect(getPrefById('38')).toBe('愛媛県')
  expect(getPrefById('39')).toBe('高知県')
  expect(getPrefById('41')).toBe('佐賀県')
  expect(getPrefById('42')).toBe('長崎県')
  expect(getPrefById('43')).toBe('熊本県')
  expect(getPrefById('44')).toBe('大分県')
  expect(getPrefById('45')).toBe('宮崎県')
  expect(getPrefById('46')).toBe('鹿児島県')
  expect(getPrefById('47')).toBe('沖縄県')
})

test('getPrefKanaById', () => {
  expect(getPrefKanaById('01')).toBe('ほっかいどう')
  expect(getPrefKanaById('02')).toBe('あおもりけん')
  expect(getPrefKanaById('03')).toBe('いわてけん')
  expect(getPrefKanaById('04')).toBe('みやぎけん')
  expect(getPrefKanaById('05')).toBe('あきたけん')
  expect(getPrefKanaById('06')).toBe('やまがたけん')
  expect(getPrefKanaById('07')).toBe('ふくしまけん')
  expect(getPrefKanaById('08')).toBe('いばらきけん')
  expect(getPrefKanaById('09')).toBe('とちぎけん')
  expect(getPrefKanaById('10')).toBe('ぐんまけん')
  expect(getPrefKanaById('11')).toBe('さいたまけん')
  expect(getPrefKanaById('12')).toBe('ちばけん')
  expect(getPrefKanaById('13')).toBe('とうきょうと')
  expect(getPrefKanaById('14')).toBe('かながわけん')
  expect(getPrefKanaById('15')).toBe('にいがたけん')
  expect(getPrefKanaById('16')).toBe('とやまけん')
  expect(getPrefKanaById('17')).toBe('いしかわけん')
  expect(getPrefKanaById('18')).toBe('ふくいけん')
  expect(getPrefKanaById('19')).toBe('やまなしけん')
  expect(getPrefKanaById('20')).toBe('ながのけん')
  expect(getPrefKanaById('21')).toBe('ぎふけん')
  expect(getPrefKanaById('22')).toBe('しずおかけん')
  expect(getPrefKanaById('23')).toBe('あいちけん')
  expect(getPrefKanaById('24')).toBe('みえけん')
  expect(getPrefKanaById('25')).toBe('しがけん')
  expect(getPrefKanaById('26')).toBe('きょうとふ')
  expect(getPrefKanaById('27')).toBe('おおさかふ')
  expect(getPrefKanaById('28')).toBe('ひょうごけん')
  expect(getPrefKanaById('29')).toBe('ならけん')
  expect(getPrefKanaById('30')).toBe('ふくおかけん')
  expect(getPrefKanaById('31')).toBe('とっとりけん')
  expect(getPrefKanaById('32')).toBe('しまねけん')
  expect(getPrefKanaById('33')).toBe('おかやまけん')
  expect(getPrefKanaById('34')).toBe('ひろしまけん')
  expect(getPrefKanaById('35')).toBe('やまぐちけん')
  expect(getPrefKanaById('36')).toBe('とくしまけん')
  expect(getPrefKanaById('37')).toBe('かがわけん')
  expect(getPrefKanaById('38')).toBe('えひめけん')
  expect(getPrefKanaById('39')).toBe('こうちけん')
  expect(getPrefKanaById('41')).toBe('さがけん')
  expect(getPrefKanaById('42')).toBe('ながさきけん')
  expect(getPrefKanaById('43')).toBe('くまもとけん')
  expect(getPrefKanaById('44')).toBe('おおいたけん')
  expect(getPrefKanaById('45')).toBe('みやざきけん')
  expect(getPrefKanaById('46')).toBe('かごしまけん')
  expect(getPrefKanaById('47')).toBe('おきなわけん')
})