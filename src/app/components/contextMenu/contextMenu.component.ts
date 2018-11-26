import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({

  selector: 'context-menu',
  templateUrl: './contextMenu.html',
  styleUrls: ['./contextMenu.component.scss', './animate.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent implements OnChanges {

  @ViewChild('contextMenu')
  private contextMenuElement: ElementRef;

  @Input() contextMenuItems: any[];
  @Input() addToDocument: boolean = false;
  @Input() animate: boolean = false;
  @Input() animateType: string = 'zoomInDown';

  @Output() onContextMenuClick = new EventEmitter<any>();

  private containerElement;
  private documentOncontextmenu;

  private _animationTypes: string[] = ["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello",
    "bounceIn", "bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeIn",
    "fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight", "fadeInRightBig","fadeInUp","fadeInUpBig",
    "flip","flipInX","flipInY", "lightSpeedIn","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft",
    "rotateInUpRight", "slideInUp","slideInDown", "slideInLeft","slideInRight","zoomIn","zoomInDown","zoomInLeft",
    "zoomInRight","zoomInUp", "jackInTheBox","rollIn"];

  ngAfterViewInit() {
    this.documentOncontextmenu = document.oncontextmenu;

    this.containerElementChange();
  }

  @HostListener('document:mousedown', ['$event'])
  onClick(event: MouseEvent) {
    if (event && this.contextMenuElement && event.target && (event.target as HTMLElement).classList.toString().indexOf('context-menu-item') === -1) {
      if (this.contextMenuElement.nativeElement.classList.contains('show')) {
        this.hideContextMenu();
      } else if (3 === event.which && this.isInsideContainerElement(event.target)) {
        this.contextMenuElement.nativeElement.innerHTML = '';

        this.contextMenuItems.forEach((contextMenuItem, index) => {
          this.contextMenuElement.nativeElement.insertAdjacentHTML('beforeend',

            ((this.animate === true) ? "<div class='context-menu-item animated "+this.animateType+"' style='animation-delay: " + Number(.1 * index) + "s;'>" : "<div class='context-menu-item'>")+
            "<div class='context-menu-item-content'>" + contextMenuItem + "</div>" +
            "<div class='horizontal-line'></div>" +
            "</div>");
        });

        this.renderer.addClass(this.contextMenuElement.nativeElement, 'show');
        let contextMenuHeight = this.contextMenuElement.nativeElement.clientHeight;

        let contextMenuItems = this.contextMenuElement.nativeElement.getElementsByClassName('context-menu-item');
        let contextMenuItemWidth = (contextMenuItems && contextMenuItems.length) ? contextMenuItems[0].clientWidth : 250;

        this.renderer.setStyle(this.contextMenuElement.nativeElement, 'left', (event.x + contextMenuItemWidth <= window.innerWidth) ? event.x + 'px' : event.x - contextMenuItemWidth + 'px');
        this.renderer.setStyle(this.contextMenuElement.nativeElement, 'top', (event.y + contextMenuHeight <= window.innerHeight) ? event.y + 'px' : event.y - contextMenuHeight + 'px');

        [].forEach.call(document.getElementsByClassName('context-menu-item'), element => {
          element.removeEventListener("click", this.onContextMenuItemClick.bind(this));
          element.addEventListener("click", this.onContextMenuItemClick.bind(this));
        });
      }
    }
  }

  isInsideContainerElement(element){
    let isInsideContainerElement = this.addToDocument;
    if(isInsideContainerElement == false) {
      while (element) {
        if (element == this.containerElement) {
          isInsideContainerElement = true;
          break;
        }
        element = element.parentNode;
      }
    }

    return isInsideContainerElement;
  }

  hideContextMenu() {
    this.renderer.removeClass(this.contextMenuElement.nativeElement, 'show');
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const contextMenuItemsChanges: SimpleChange = changes.contextMenuItems;
    const animateChanges: SimpleChange = changes.animate;
    const animateTypeChanges: SimpleChange = changes.animateType;
    const addToDocumentChanges: SimpleChange = changes.addToDocument;

    if (contextMenuItemsChanges) {
      this.contextMenuItems = contextMenuItemsChanges.currentValue;
    }

    if (animateChanges) {
      this.animate = animateChanges.currentValue;
    }

    if (animateTypeChanges) {
      this.animateType = animateTypeChanges.currentValue;
    }

    if (addToDocumentChanges) {
      this.addToDocument = addToDocumentChanges.currentValue;
      this.containerElementChange();
    }
  }

  containerElementChange(){
    if(this.addToDocument === false){
      document.oncontextmenu = this.documentOncontextmenu;
      this.containerElement = this.contextMenuElement.nativeElement.parentElement.parentElement;
    }else{
      this.containerElement = document;
    }

    this.containerElement.oncontextmenu = () => {
      return false;
    };
  }

  onContextMenuItemClick(event: Event) {
    this.hideContextMenu();
    if (event) {
      this.onContextMenuClick.next({contextMenuItem: (event.target as HTMLElement).firstChild.textContent, event});
    }
  }

  get animationTypes(): string[] {
    return this._animationTypes;
  }
}
