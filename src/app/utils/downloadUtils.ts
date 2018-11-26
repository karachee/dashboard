export default class DownloadUtils {
  static saveToFileSystem(content, filename) {
    let blob = new Blob([content], {type: 'octet/stream'});
    let a = document.createElement("a") as HTMLElement;
    document.body.appendChild(a);
    a.setAttribute("style", "display: none;");
    a['href'] = window.URL.createObjectURL(blob);
    a['download'] = filename;
    a.click();
  }
}
