import {HomeComponent} from './home/home.component';
import {DataTableComponent} from './dataTable/dataTable.component';
import {ChartComponent} from "./chart/chart.component";
import {ComponentsComponent} from "./components/components.component";
import {LocalDataRetrieverService} from "../services/localDataRetriever.service";

const homeState = {
  name: 'home',
  displayName: 'Home',
  url: '/home',
  component: HomeComponent,
  showOnSideMenu: true,
  icon: 'home',
  order: 0
};

const dataTableState = {
  name: 'dataTable',
  displayName: 'Data Table',
  url: '/dataTable',
  component: DataTableComponent,
  showOnSideMenu: true,
  icon: 'table_chart',
  order: 1,
  resolve: [
    {
      token: 'dataTableData',
      deps: [LocalDataRetrieverService],
      resolveFn: (localDataRetrieverService) => localDataRetrieverService.getDataTableDataPromise()
    }
  ]
};

const chartState = {
  name: 'chart',
  displayName: 'Charts',
  url: '/chart',
  component: ChartComponent,
  showOnSideMenu: true,
  icon: 'show_chart',
  order: 2
};

const componentsState = {
  name: 'components',
  displayName: 'Components',
  url: '/components',
  component: ComponentsComponent,
  showOnSideMenu: true,
  icon: 'view_module',
  order: 3
};

export const PAGES_STATES = [
  homeState,
  dataTableState,
  chartState,
  componentsState
];
