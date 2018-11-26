import {Component, OnInit} from '@angular/core';
import {StateDeclaration, StateService} from '@uirouter/angular';
import {LocalStorageService} from "../services/localStorage.service";
import {ThemeService} from "../services/theme.service";
import {OverlayContainer} from "@angular/cdk/overlay";
import {AuthenticationService} from "../services/authentication.service";
import {UserService} from "../services/user.service";
import {TargetState, Transition, TransitionService} from "@uirouter/core";
import StringUtils from "../utils/stringUtils";
import {ContextMenuComponent} from "../components/contextMenu/contextMenu.component";

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  states: StateDeclaration [];
  expansionPanels: StateDeclaration[];

  homeSideNavOpen: boolean = false;
  menuSideNavOpen: boolean = false;

  selectedTheme: string;
  themeSubscription;
  themes: {}[];

  currentState: string = 'Home';

  menuPosition = 'start';
  settingsPosition = 'end';

  constructor(private stateService: StateService, private themeService: ThemeService, private overlayContainer: OverlayContainer,
              public authenticationService: AuthenticationService, public userService: UserService, private transitionService: TransitionService) {

    transitionService.onFinish({}, (transition: Transition) => {
      if (transition) {
        let targetState: TargetState = transition.targetState();
        if (targetState) {
          let state = targetState.state();
          if (state) {
            let currentState = (state['displayName'] != null && state['displayName'] != '') ? state['displayName'] : this.currentState;

            if (state['parent']) {
              currentState = StringUtils.undoCamelCase(state['parent'] as string) + ' - ' + currentState;
            }
            this.currentState = (currentState) ? currentState.charAt(0).toUpperCase() + currentState.slice(1) : null;
          }
        }
      }
    });

    this.stateService = stateService;
    this.states = this.stateService.get().filter(x => x.hasOwnProperty('showOnSideMenu') && x['showOnSideMenu'] === true);

    this.expansionPanels = this.stateService.get().filter(x => x.hasOwnProperty('showOnSideMenuInExpansionPanel') && x['showOnSideMenuInExpansionPanel'] === true);

    this.expansionPanels.forEach(x => {
      x['children'] = this.stateService.get().filter(state => state.hasOwnProperty('parent') && state['parent'] == x.name);
    });

    this.expansionPanels.forEach(x => {
      let children = x['children'];
      let expansionPanelsAccordionGroups = [];

      let remainingChildren = [];
      children.forEach((child, index) => {
        if (child['accordionGroup'] != null) {
          let accordionGroup = expansionPanelsAccordionGroups.find(y => y['title'] == child['accordionGroup']);
          if (accordionGroup == null) {
            accordionGroup = {
              title: child['accordionGroup'],
              states: [],
              icon: child['icon']
            };

            expansionPanelsAccordionGroups.push(accordionGroup);
          }
          accordionGroup['states'].push(child);
        } else {
          remainingChildren.push(child);
        }
      });
      x['children'] = remainingChildren;
      x['expansionPanelsAccordionGroups'] = expansionPanelsAccordionGroups;

    });

    this.themes = themeService.getThemes();
  }

  ngOnInit() {
    this.themeSubscription = this.themeService.themeSubject.subscribe((value) => {
      this.selectedTheme = value;
      this.themes.forEach(x => this.overlayContainer.getContainerElement().classList.remove(x['value']));
      this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }


  themeChanged() {
    this.themeService.setTheme(this.selectedTheme);
  }

  flipLayout(){
    if('start' == this.menuPosition){
      this.menuPosition = 'end';
      this.settingsPosition = 'start'
    }else{
      this.settingsPosition = 'end';
      this.menuPosition = 'start'
    }
  }

  getFlexDirection(){
    return ('start' == this.menuPosition) ? 'row' : 'row-reverse';
  }
}
