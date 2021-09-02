import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Component, OnInit,} from '@angular/core';
import {DataService} from "../data.service";
import {Location} from "@angular/common";
import {Color, Label} from 'ng2-charts';
import {Dati} from "../Dati";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})

export class LineComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey 0080ff 00bfff 00ffff
      backgroundColor: 'rgba(0, 128, 255,0.2)',
      borderColor: '#0080ff',
      pointBackgroundColor: '#0080ff',
      pointBorderColor: '#00008b',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(0, 191, 255,0.2)',
      borderColor: '#00bfff',
      pointBackgroundColor: '#00bfff',
      pointBorderColor: '#0000e6',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(0, 255, 255,0.3)',
      borderColor: '#00ffff',
      pointBackgroundColor: '#4d4dff',
      pointBorderColor: '#00008b',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(
    private dataService: DataService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.getLabel();
    this.getData();
  }

  getLabel() {
    this.dataService.getLabel().subscribe(l => this.lineChartLabels = l);
  }

  getData() {
    for (let d of Dati) {
      this.dataService.getDataChart().subscribe(d => this.lineChartData = d)
    }
  }

  getDato(i: number) {
    this.dataService.getDataByNumberChart(i).subscribe(d => this.lineChartData = d)
  }

  goBack(): void {
    this.location.back();
  }
}
