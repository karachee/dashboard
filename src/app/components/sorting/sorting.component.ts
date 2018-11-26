import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material";
import {SortingDialogComponent} from "./sortingDialog/sortingDialog.component";
import {firstBy} from "thenby";
import {SortingItem} from "./sortingItem";

@Component({
  selector: 'sorting',
  templateUrl: './sorting.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent<T> {

  private elementRef: ElementRef;
  @Input() data: T[];
  @Input() sortingKeys: SortingItem[];
  @Input() selectedSortingKeys: SortingItem[];

  @Output() returnData = new EventEmitter<any>();

  closeBottomSheet() {

  }

  constructor(elementRef: ElementRef, private sortingDialog: MatDialog) {
    this.elementRef = elementRef;
  }

  openSortingDialog() {
    let dialogRef = this.sortingDialog.open(SortingDialogComponent, {
      width: '50vw',
      height: '80vh',
      data: {sortingKeys: this.sortingKeys, selectedSortingKeys: this.selectedSortingKeys}
    });

    dialogRef.afterClosed().subscribe(selectedSortingKeys => {
      this.selectedSortingKeys = selectedSortingKeys;
      this.sortData();
    }, error => {

    });
  }

  sortData() {
    if (this.data && this.selectedSortingKeys && this.selectedSortingKeys.length != 0) {
      let sortFunction;
      this.selectedSortingKeys.forEach((x, index, array) => {
        let direction = ('ASC' == x.sortDirection) ? 1 : -1;
        if (index == 0) {
          sortFunction = firstBy(x.value, {direction});
        } else {
          sortFunction = sortFunction.thenBy(x.value, {direction});
        }
      });

      this.data.sort(sortFunction);
    }
    this.returnDataHandler();
  }

  returnDataHandler() {
    this.returnData.emit({'data': this.data, 'selectedSortingKeys': this.selectedSortingKeys});
  }
}
