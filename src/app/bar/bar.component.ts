import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Location} from "@angular/common";
import {Label} from "ng2-charts";
import {Dati} from "../Dati";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: false,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];
  public barChartColor = [
    {
      backgroundColor: ["#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff", "#0080ff"]
    },
    {
      backgroundColor: ["#00bfff", "#00bfff", "#00bfff", "#00bfff", "#00bfff", "#00bfff"]
    },
    {
      backgroundColor: ["#00ffff", "#00ffff", "#00ffff", "#00ffff", "#00ffff", "#00ffff"]
    }
  ]


  constructor(
    private dataService: DataService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.getLabel()
    this.getData()
    console.log(this.barChartData)
  }

  getLabel() {
    this.dataService.getLabel().subscribe(l => this.barChartLabels = l)
  }

  getData() {
    for (let d of Dati) {
      this.dataService.getDataChart().subscribe(d => this.barChartData = d)
    }
  }

  getDato(i: number) {
    this.dataService.getDataByNumberChart(i).subscribe(d => this.barChartData = d)
  }

  goBack(): void {
    this.location.back()
  }
}

