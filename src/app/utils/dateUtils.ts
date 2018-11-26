export default class DateUtils {

  static getYYYYMMDDSting(date: Date, delimiter: string) {
    delimiter = (delimiter != null) ? delimiter : '/'
    return (date) ? date.getFullYear() + delimiter + this.getMonth(date.getMonth()) + delimiter + date.getDate() : '';
  }

  static getMMDDYYYYSting(date: Date, delimiter: string) {
    delimiter = (delimiter != null) ? delimiter : '/'
    return (date) ? this.getMonth(date.getMonth()) + delimiter + date.getDate() + delimiter + date.getFullYear() : '';
  }

  private static getMonth(monthFromDate) {
    let month = null;
    if (monthFromDate) {
      month = monthFromDate + 1;
      if (month < 10) {
        month = '0' + month
      }
    }
    return month;
  }
}
