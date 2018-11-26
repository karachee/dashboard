import {Component, Input, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from "@angular/material";
import {Person} from "../../models/person";
import {SortingItem} from "../../components/sorting/sortingItem";

@Component({
  selector: 'data-table',
  templateUrl: './dataTable.component.html',
  styleUrls: ['./dataTable.component.scss']
})
export class DataTableComponent {

  public matTableDataSource = new MatTableDataSource();

  public displayColumns: string[] = [];

  public optionalDisplayColumns: {}[] = [
    {
      display: 'First Name',
      enabled: true
    },
    {
      display: 'Last Name',
      enabled: true
    },
    {
      display: 'Age',
      enabled: true
    },
    {
      display: 'Phone Number',
      enabled: true
    },
    {
      display: 'Address',
      enabled: true
    }
  ];

  sortingKeys: SortingItem[] = [
    {
      displayValue: 'First Name',
      value: 'firstName',
      sortDirection: 'ASC'
    },
    {
      displayValue: 'Last Name',
      value: 'lastName',
      sortDirection: 'ASC'
    },
    {
      displayValue: 'Age',
      value: 'age',
      sortDirection: 'ASC'
    },
    {
      displayValue: 'Phone Number',
      value: 'phoneNumber',
      sortDirection: 'ASC'
    },
    {
      displayValue: 'Address',
      value: 'address',
      sortDirection: 'ASC'
    }
  ];

  selectedSortingKeys: SortingItem[] = [];

  @Input() dataTableData: Person[];
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
  }

  ngOnInit() {
    this.matTableDataSource.data = this.dataTableData;
    this.updateColumns();
  }

  updateColumns() {
    if (this.optionalDisplayColumns) {
      this.displayColumns = this.optionalDisplayColumns.filter(x => x['enabled'] == true).map((y) => y['display']);
    }
  }

  handleReturnedSortedData($event) {
    if ($event) {
      if ($event.data) {
        this.sort.active = null;
        this.matTableDataSource.data = $event.data;
      }

      if ($event.selectedSortingKeys) {
        this.selectedSortingKeys = $event.selectedSortingKeys;
      }
    }
  }
}
