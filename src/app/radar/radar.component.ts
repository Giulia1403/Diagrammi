import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Location} from "@angular/common";
import {Label} from "ng2-charts";
import {Dati} from "../Dati";

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})


export class RadarComponent implements OnInit {

  data = Dati;

  public radarChartOptions: ChartOptions = {
    responsive: false,
  };
  public radarChartLabels: Label[] = [];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';


  constructor(
    private dataService: DataService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.getLabel();
    this.getData();
    console.log(this.radarChartData)
  }

  getLabel() {
    this.dataService.getLabel().subscribe(l => this.radarChartLabels = l)
  }

  getData() {
    for (let d of Dati) {
      this.dataService.getDataChart().subscribe(d => this.radarChartData = d)
    }
  }

  getDato(i: number) {
    this.dataService.getDataByNumberChart(i).subscribe(d => this.radarChartData = d)
  }

  goBack(): void {
    this.location.back()
  }
}

