import * as _ from 'lodash';

export default class StringUtils {
  static isNotBlank(val: string) {
    return val != null && val.length > 0;
  }

  static isBlank(val: string) {
    return val == null || val.length == 0;
  }

  static joinUrlPaths(...ins: any[]): string {
    let elems = [];
    for (let argumentsKey in arguments) {
      elems.push(_.trimStart(_.trimEnd(arguments[argumentsKey], "/"), "/"));
    }
    return _.join(elems, "/");
  }

  static undoCamelCase(input: string) {
    return (input) ? input.replace(/([^A-Z])([A-Z])/g, '$1 $2') : null;
  }
}
