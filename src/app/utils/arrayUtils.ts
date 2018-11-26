export default class ArrayUtils {
  static isNotEmpty(val: any[]) {
    return val != null && val.length > 0;
  }
}
