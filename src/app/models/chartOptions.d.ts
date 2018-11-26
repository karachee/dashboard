export interface ChartOptions {
  chart: Chart;
  title: Title;
  xAxis: XAxis;
  yAxis: YAxis;
  credits: Credits;
  series: Series[];
}

export interface Chart {
  type?: string;
}

export interface Title {
  text?: string;
}

export interface XAxis {
  type?: string;
  labels?: Labels;
  categories?: any[];
  crosshair?: boolean;
}

export interface YAxis {
  title?: Title
}

export interface Credits {
  enabled?: boolean;
}

export interface Series {
  name?: string;
  data?: any[];
}


export interface Labels {
  rotation?: number;
}



