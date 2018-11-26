import {ChangeDetectorRef, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ContextMenuComponent} from "../../components/contextMenu/contextMenu.component";
import {BottomSheetItem} from "../../models/bottomSheetItem";

@Component({
  selector: 'components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  flip: boolean = false;
  flipType: string = 'flip-y';
  flipTimes: number =1;

  flipSpeed = 6;
  flipSpeedMin = 1;
  flipSpeedMax = 10;

  contextMenuItems: any[] = [... Array(10).keys()].map(x => `Test Value ${x+1}`);

  contextMenuItemClicked: string = null;
  animate: boolean = true;
  addToDocument: boolean = false;

  animationTypes: string[] = [];
  animationType: string = 'zoomInDown';

  addToContextMenuValue: string;

  bottomSheetOpen: boolean = false;
  bottomSheetItems: BottomSheetItem[] = [
    {
      name: 'Test',
      value: 'Test Value'
    }
  ];

  @ViewChild('contextMenu') contextMenuComponent: ContextMenuComponent;
  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    if(this.contextMenuComponent){
      this.animationTypes = this.contextMenuComponent.animationTypes;
      this.changeDetectorRef.detectChanges();
    }
  }

  onContextMenuClick(obj){
    if(obj){
      this.contextMenuItemClicked = obj.contextMenuItem;
    }
  }

  addToContextMenu(){
    this.contextMenuItems.push(this.addToContextMenuValue);
  }

  bottomSheetClosed(event) {
    this.bottomSheetOpen = false;
  }

  toggleBottomSheet() {
    this.bottomSheetOpen = !this.bottomSheetOpen;
  }
}
