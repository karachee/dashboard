import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'bottom-sheet',
  templateUrl: './bottomSheet.html',
  styleUrls: ['./bottomSheet.component.scss']
})
export class BottomSheetComponent {
  private elementRef: ElementRef;

  @Input() set isOpen(value: boolean) {
    if (value != null && this.elementRef) {
      if (value) {
        this.elementRef.nativeElement.firstChild.classList.add('show');
      } else {
        this.elementRef.nativeElement.firstChild.classList.remove('show');
      }
    }
  }

  @Output() onClose = new EventEmitter<any>();

  closeBottomSheet() {
    this.isOpen = false;

    if (this.onClose) {
      this.onClose.emit();
    }
  }

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
}
