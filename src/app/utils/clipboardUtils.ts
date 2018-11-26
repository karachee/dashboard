export default class ClipboardUtils {
  static copyToClipboard(val: any) {
    let copyFrom = document.createElement("textarea");
    copyFrom.textContent = val;
    document.body.appendChild(copyFrom);
    copyFrom.focus();
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
  }
}
