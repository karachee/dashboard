import * as Highcharts from "highcharts";
import {Gradient} from "highcharts";

declare var jquery: any;
declare var $: any;

export class HighChartsUtils {


  public static getCombinationInstanceChart(seriesData, title: string): Object {
    return {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: title
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      labels: {},
      tooltip: {
        shared: true,
        crosshairs: true
      },
      series: seriesData,
      credits: {
        enabled: false
      },
    }
  }

  public static getCombinationChart(chartInfo, title: string): Object {
    return {
      title: {
        text: title
      },
      xAxis: {
        categories: chartInfo.categories
      },
      labels: {},
      series: chartInfo.seriesData,
      credits: {
        enabled: false
      },
    }
  }

  public static getLineLabelsChart(seriesData, title: string): Object {
    return {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: title
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Count'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Volume',
        data: seriesData
      }],
      credits: {
        enabled: false
      },
    }
  }

  public static getTransactionTimeSeriesChart(seriesData, title: string): Object {
    return {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: title
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Count'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, (Highcharts.Color(Highcharts.getOptions().colors[0]) as Gradient).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'Volume',
        data: seriesData
      }],
      credits: {
        enabled: false
      },
    }
  }

  static getPieChart(seriesData, seriesName, title) {
    return {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: title
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: seriesName,
        colorByPoint: true,
        data: seriesData
      }],
      credits: {
        enabled: false
      },
    }
  }

  static getWordCloud(seriesData, seriesName, title) {
    return {
      series: [{
        type: 'wordcloud',
        data: seriesData,
        name: seriesName
      }],
      title: {
        text: title
      },
      credits: {
        enabled: false
      },
    };
  }

  static getBasicColumnCharts(seriesData, seriesName, title) {
    return {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count'
        }
      },
      tooltip: {
        pointFormat: '<b>{point.y}</b> benefit(s)'
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: seriesName,
          data: seriesData
        }
      ],
      credits: {
        enabled: false
      },
    };
  }

  static getHighChartColors() {
    return Highcharts.getOptions().colors;
  }
}
