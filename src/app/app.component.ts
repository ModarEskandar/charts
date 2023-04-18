import { Component } from '@angular/core';
import { ChartOptions } from './charts/charts.component';
import { ChartsNames } from './constatnts/charts.names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'charts';
  open = true;
  authedUser = 'مضر اسكندر';
  jobTitle = 'موظف الهيئة العامة للجمارك';
  isAuthenticated = true;
  filterText = '';
  chartsOptions: Partial<ChartOptions>[] = [
    {
      title: {
        text: 'Product Trends by Month',
        align: 'center',
      },
      series: [
        {
          name: 'distibuted',
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            customIcons: [],
          },
          export: {
            csv: {
              filename: undefined,
              columnDelimiter: ',',
              headerCategory: 'category',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp!).toDateString();
              },
            },
            svg: {
              filename: undefined,
            },
            png: {
              filename: undefined,
            },
          },
          autoSelected: 'zoom',
        },
      },
      colors: [
        '#008FFB',
        '#00E396',
        '#FEB019',
        '#FF4560',
        '#775DD0',
        '#546E7A',
        '#26a69a',
        '#D10CE8',
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'],
        ],
        labels: {
          style: {
            colors: [
              '#008FFB',
              '#00E396',
              '#FEB019',
              '#FF4560',
              '#775DD0',
              '#546E7A',
              '#26a69a',
              '#D10CE8',
            ],
            fontSize: '12px',
          },
        },
      },
    },
    {
      series: [
        {
          name: ChartsNames.INV_ISU,
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: ChartsNames.ADM_INV_CURRENT,
        align: 'right',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    },
    {
      title: {
        text: ChartsNames.SOC_MEDIA_USAGE,
        align: 'center',
      },
      seriesNa: [76, 67, 61, 90],
      chart: {
        height: 390,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              show: true,
            },
          },
        },
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 50,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    },
    {
      series: [
        {
          name: 'Series 1',
          data: [80, 90, 99, 80, 45, 78],
        },
      ],
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
        text: ChartsNames.FIFA_RATE,
      },
      xaxis: {
        categories: [
          'Pace',
          'Shooting',
          'Passing',
          'Dribbling',
          'Defending',
          'Physical',
        ],
      },
    },
  ];
  searchList = [
    {
      name: 'Parent1',
      children: [
        {
          name: 'Child11',
          children: [
            {
              name: 'Child111',
            },
            {
              name: 'Child112',
            },
          ],
        },
        {
          name: 'Child12',
          children: [
            {
              name: 'Child121',
            },
            {
              name: 'Child122',
            },
          ],
        },
      ],
    },
    {
      name: 'Parent2',
      children: [
        {
          name: 'Child21',
          children: [
            {
              name: 'Child211',
            },
            {
              name: 'Child212',
            },
          ],
        },
        {
          name: 'Child22',
          children: [
            {
              name: 'Child221',
            },
            {
              name: 'Child222',
            },
          ],
        },
      ],
    },
    {
      name: 'Parent3',
      children: [
        {
          name: 'Child31',
          children: [
            {
              name: 'Child311',
            },
            {
              name: 'Child312',
            },
          ],
        },
        {
          name: 'Child32',
          children: [
            {
              name: 'Child321',
            },
            {
              name: 'Child322',
            },
          ],
        },
      ],
    },
  ];
}
