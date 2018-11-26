import {ChangeDetectorRef, Component} from '@angular/core';
import {StateDeclaration, Transition, TransitionService} from "@uirouter/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  applicationLoading: boolean = false;

  constructor(private transitionService: TransitionService, private changeDetectorRef: ChangeDetectorRef) {
    transitionService.onBefore({}, (transition: Transition) => {

      if (transition) {
        let toStateDeclaration: StateDeclaration = transition.to();
        let fromStateDeclaration: StateDeclaration = transition.from();
        if (toStateDeclaration == null || fromStateDeclaration == null || (toStateDeclaration.name != fromStateDeclaration.name)) {
          this.applicationLoading = true;
          this.changeDetectorRef.detectChanges();
        }
      }
    });
    transitionService.onFinish({}, (transition: Transition) => {
      this.applicationLoading = false;
      this.changeDetectorRef.detectChanges();
    });
  }
}
