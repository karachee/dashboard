export default class JsonUtils {
  static prettyPrint(val: any) {
    return (val) ? JSON.stringify(val, null, '\t') : '';
  }
}
