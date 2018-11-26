export default class MapUtils {
  static isNotEmpty(val: {}) {
    return val != null && Object.keys(val).length > 0;
  }
}
