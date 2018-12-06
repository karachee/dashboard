import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DragulaService} from "ng2-dragula";
import {SortingItem} from "../sortingItem";
import {Subscription} from "rxjs";

@Component({
  selector: 'sorting-dialog',
  templateUrl: './sortingDialog.component.html',
  styleUrls: ['./sortingDialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SortingDialogComponent {
  originalSelectedSortingKeys: SortingItem[] = [];

  selectedSortingKeys: SortingItem[] = [];

  sortingKeys: SortingItem[];

  sortDirections: string[] = ['DESC', 'ASC'];

  subs = new Subscription();

  constructor(private dialogRef: MatDialogRef<SortingDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private dragulaService: DragulaService) {
    let sortingKeys = [];

    if (data && data['sortingKeys']) {
      Object.assign(sortingKeys, data['sortingKeys']);
    }
    this.originalSelectedSortingKeys = (data && data['selectedSortingKeys']) ? data['selectedSortingKeys'] : [];
    this.selectedSortingKeys = this.originalSelectedSortingKeys;

    if (sortingKeys) {
      if (this.selectedSortingKeys) {
        this.selectedSortingKeys.forEach(x => {
          let index = sortingKeys.findIndex(y => y.value == x.value);
          if (index > -1) {
            sortingKeys.splice(index, 1);
          }
        })
      }

      this.sortingKeys = sortingKeys.map(x => {
        return {
          value: x.value,
          displayValue: x.displayValue,
          sortDirection: (x.sortDirection != null) ? x.sortDirection : 'DESC'
        }
      });
    }

    this.subs.add(this.dragulaService.drop().subscribe(({name, el, target, source, sibling}) => {
        if (target && source) {
          if ('selected-sorting-keys' == source.id && 'sorting-keys' == target.id) {

          }
        }
      }
    ));
  }

  ngOnInit() {

  }

  sortButtonHandler() {
    this.closeDialog(this.selectedSortingKeys);
  }

  cancelButtonHandler() {
    this.closeDialog(this.originalSelectedSortingKeys);
  }

  closeDialog(selectedSortingKeys) {
    this.dialogRef.close(selectedSortingKeys);
  }

  clearSort() {
    this.selectedSortingKeys.forEach(x => this.sortingKeys.push(x));
    this.selectedSortingKeys = [];
  }
}
