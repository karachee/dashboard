import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalStorageService} from "./localStorage.service";

@Injectable()
export class ThemeService {
  public theme: string = 'indigo-pink-theme';
  public themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.theme);

  private themes: {}[] = [
    {value: 'light-theme', label: 'Light'},
    {value: 'dark-theme', label: 'Dark'},
    {value: 'deeppurple-amber-theme', label: 'Deep Purple Amber'},
    {value: 'pink-bluegrey-theme', label: 'Pink Blue Grey'},
    {value: 'purple-green-theme', label: 'Purple Green'},
    {value: 'indigo-pink-theme', label: 'Indigo Pink'},
    {value: 'custom-theme', label: 'Custom'},
    {value: 'random', label: 'Random'},
    {value: 'randomLoop', label: 'Random Loop'}
  ];

  randomLoopTimeout = null;

  constructor(private localStorageService: LocalStorageService) {
    this.init();
  }

  getTheme() {
    return this.theme;
  }

  setTheme(value: string) {
    this._setTheme(value, true);
  }

  _setTheme(value: string, manuallySet: boolean) {
    if (manuallySet) {
      this.clearRandomLoop();
    }

    if ('randomLoop' == value) {
      this.performRandomLoopTheme();
    } else {
      value = ('random' == value) ? this.getRandomTheme() : value;
      this.themeSubject.next(value);
      this.theme = value;
      this.localStorageService.setTheme(this.theme);
    }
  }

  performRandomLoopTheme() {
    this.clearRandomLoop();
    this.randomLoopTimeout = setInterval(() => this._setTheme(this.getRandomTheme(), false), 1000);
  }

  clearRandomLoop() {
    if (this.randomLoopTimeout != null) {
      clearTimeout(this.randomLoopTimeout);
    }
  }

  getRandomTheme() {
    let tempTheme = [];
    Object.assign(tempTheme, this.themes);
    tempTheme.splice(tempTheme.findIndex(x => x.value == 'random'));
    tempTheme.splice(tempTheme.findIndex(x => x.value == 'randomLoop'));
    return tempTheme[Math.floor(Math.random() * tempTheme.length)]['value'];
  }

  getThemes() {
    return this.themes;
  }

  setThemes(value) {
    this.themes = value;
  }

  init() {
    let theme = this.localStorageService.getTheme();
    if (theme) {
      this.theme = theme;
      this.themeSubject.next(this.theme);
    }
  }
}
