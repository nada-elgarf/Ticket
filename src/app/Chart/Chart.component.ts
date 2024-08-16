import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexAnnotations,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  annotations: ApexAnnotations;
};

@Component({
  selector: 'app-Chart',
  templateUrl: './Chart.component.html',
  styleUrls: ['./Chart.component.css']
})
export class ChartComponent implements OnInit   {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "250 استخدام",
          data: [140, 190, 110, 160, 250, 145, 200, 160, 180, 120, 90, 150],
          color: 'rgba(138, 116, 249, 1)'
        }
      ],
      chart: {
        type: "area",
        height: 250,
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "",
        align: "left"
      },
      subtitle: {
        text: "",
        align: "left"
      },
      labels:[],
      xaxis: {
        categories: ['ديسمبر', 'نوفمبر', 'اكتوبر', 'سبتمبر', 'اغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
      },
      yaxis: {
        opposite: true,
        labels: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left"
      },
      annotations: {
        xaxis: [
          {
            x: 'يناير',
            borderColor: '#ff0000',
            strokeDashArray: 0,
            label: {
              borderColor: 'rgba(138, 116, 249, 0.8)',
              style: {
                color: '#fff',
                background: 'rgba(138, 116, 249, 1)'
              },
              text: '250'
            }
          }
        ]
      }
    };
  }

  ngOnInit(): void {
  }
}
