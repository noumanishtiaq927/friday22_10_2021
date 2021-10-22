import {
  Component,
  OnInit,
  ViewChild,
  ɵpublishDefaultGlobalUtils,
} from '@angular/core';

import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-graphcard',
  templateUrl: './graphcard.component.html',
  styleUrls: ['./graphcard.component.css'],
})
export class GraphcardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
  }
  canvas: any;
  ctx: any;
  canvas2: any;
  ctx2: any;
  data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  @ViewChild('mychart') mychart: any;
  @ViewChild('mychart2') mychart2: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas2 = this.mychart2.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');
    new Chart(this.ctx2, {
      type: 'doughnut',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Room Booking Chart'
          }
        }
      },
    });
    new Chart(this.ctx, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Value',
            data: [-10,-9,-8,-7,-6,-5,-4,-3,-2 , -1,  0,  1,2,3 ,4,5,6,7,8,9,10],
            backgroundColor: 'rgb(115 185 243 / 65%)',
            borderColor: '#007ee7',

          },
          {
            label: 'Amount',
            data: [-20,-19,-18,-17,-16,-15,-14,-13,-12 , -11,  0,10,9,8,7,6,5,4,3,2 ,1,  0,],
            backgroundColor: '#47a0e8',
            borderColor: '#007ee7',

          },
        ],
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21'],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
    });
  }
}
