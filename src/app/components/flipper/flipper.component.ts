import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output, Renderer2,
  SimpleChange,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'flipper',
  templateUrl: './flipper.html',
  styleUrls: ['./flipper.component.scss']
})
export class FlipperComponent implements OnChanges{

  flipStyle: string;
  rotationValue:string;

  flipperElement: HTMLElement;

  @Input() flip: boolean;
  @Input() flipType: string = 'flip-x';
  @Input() flipTimes: number = 1;
  @Input() flipSpeed: number = 0.6;

  @Output() onFlip = new EventEmitter<any>();
  @ViewChild('flipContainer') private flipContainer;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.handleFlipType();
    this.rotationValue = Number(this.flipTimes*180)+'deg';
  }

  ngOnInit(){
    this.flipperElement = document.getElementById('flipper');
  }

  ngOnChanges(changes: SimpleChanges) {
    const flipChange: SimpleChange = changes.flip;
    const flipTypeChange: SimpleChange = changes.flipType;
    const flipTimesChanges: SimpleChange = changes.flipTimes;
    const flipSpeedChanges: SimpleChange = changes.flipSpeed;

    if(flipTimesChanges){
      this.flipTimes = (flipTimesChanges.currentValue % 2 === 0) ? flipTimesChanges.currentValue + 1: flipTimesChanges.currentValue ;
      this.rotationValue = Number(this.flipTimes*180)+'deg';
    }

    if(flipTypeChange){
      this.flipType = flipTypeChange.currentValue;
      this.handleFlipType();
    }

    if(flipSpeedChanges){
      this.flipSpeed = flipSpeedChanges.currentValue;
    }

    if(flipChange) {
      this.flip = flipChange.currentValue;
      this.rotate();
    }
  }

  handleFlipType(){
    switch(this.flipType) {
      case 'flip-x':
        this.flipStyle = 'rotateX';
        break;
      case 'flip-y':
        this.flipStyle = 'rotateY';
        break;
      default:
    }
  }

  setFrontAndBackStyle(){
    if (this.flipType != null) {

      switch(this.flipType) {
        case 'flip-x':

          [].forEach.call(this.flipContainer.nativeElement.getElementsByClassName('front'), element => {
            this.renderer.setStyle(element, 'transform', 'rotateX(0deg)');
          });

          [].forEach.call(this.flipContainer.nativeElement.getElementsByClassName('back'), element => {
            this.renderer.setStyle(element, 'transform', 'rotateX('+this.rotationValue+')');
          });

          break;
        case 'flip-y':

          [].forEach.call(this.flipContainer.nativeElement.getElementsByClassName('front'), element => {
            this.renderer.setStyle(element, 'transform', 'rotateY(0deg)');
          });

          [].forEach.call(this.flipContainer.nativeElement.getElementsByClassName('back'), element => {
            this.renderer.setStyle(element, 'transform', 'rotateY('+this.rotationValue+')');
          });

          break;
        default:
      }
    }
  }

  rotate() {
    this.setFrontAndBackStyle();

    if(this.flip) {
      if(this.flipperElement){
        this.flipperElement.style.transition = Number(this.flipTimes * this.flipSpeed) + 's';
      }

      this.renderer.setStyle(this.flipContainer.nativeElement, 'transform', this.flipStyle+'('+this.rotationValue+')');
    }else {
      this.renderer.removeStyle(this.flipContainer.nativeElement, 'transform');
    }

    if (this.onFlip) {
      this.onFlip.emit();
    }
  }
}
