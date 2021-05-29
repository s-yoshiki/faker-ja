
export default class BaseCore {
  /**
   * Int型乱数生成
   * 
   * @param {number} min 最小値
   * @param {number} max 最大値
   * @returns {number} 生成された乱数
   */
  public getRandInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }
}