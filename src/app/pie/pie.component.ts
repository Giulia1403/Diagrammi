import {ChartOptions, ChartType} from "chart.js";
import {Label, SingleDataSet} from "ng2-charts";
import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {responsive: false};
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor = [
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
    this.getNomi();
    this.getAll();
  }

  getNomi() {
    this.dataService.getAllName().subscribe(l => this.pieChartLabels = l);
  }

  getData(i: number) {
    this.dataService.getDataByNumber(i).subscribe(d => this.pieChartData = d);
  }

  getAll() {
    this.dataService.getALLDataPie().subscribe(d => this.pieChartData = d);
  }

  goBack(): void {
    this.location.back();
  }
}
