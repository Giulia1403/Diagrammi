import {Label, SingleDataSet} from "ng2-charts";
import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Dati} from "./Dati";
import {Dato} from "./Dato";
import {ChartDataSets} from "chart.js";
import {Labels} from "./Labels";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = Dati;

  constructor() {
  }

  getAllName(): Observable<Label[]> {
    const l: Label[] = [];
    for (let d of this.data) {
      l.push(d.nome);
    }
    const lab = of(l)
    return lab;
  }

  getOneName(): Observable<Label> {
    const l: Label = [];
    for (let d of this.data) {
      l.push(d.nome);
    }
    const lab = of(l)
    return lab;
  }

  getALLDataPie(): Observable<SingleDataSet> {
    const data: SingleDataSet = [];
    for (let d of this.data) {
      data.push(d.data);
    }
    const d = of(data)
    return d;
  }

  getDataByNumber(i: number): Observable<SingleDataSet> {
    const data: SingleDataSet = [];
    data.push(this.data[i].data);
    const d = of(data)
    return d;
  }

  getDataByNumberChart(i: number): Observable<ChartDataSets[]> {
    const data: ChartDataSets[] = [{data: this.data[i].data, label: this.data[i].nome}]
    console.log(data)
    const d = of(data)
    return d;
  }


  getDataChart(): Observable<ChartDataSets[]> {
    const data: ChartDataSets[] = []
    for (let d of this.data) {
      this.getDataByElement(d).subscribe(d=> data.push(d))
    }
    const d = of(data)
    return d;
  }

  getDataByElement(d: Dato): Observable<ChartDataSets> {
    const info: ChartDataSets = {data: d.data, label: d.nome};
    const i = of(info)
    return i
  }

  getLabel(): Observable<Label[]> {
    const label: Label[] = [];
    for (let l of Labels) {
      label.push(l.label);
    }
    const lab = of(label)
    return lab;
  }
}
