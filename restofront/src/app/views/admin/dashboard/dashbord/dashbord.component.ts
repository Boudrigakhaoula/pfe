import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { DessertService } from 'src/app/services/dessert.service';

declare const google: any;
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  dataArray1:any;
  //nb client
  clientCount: number | undefined;
  error: string | undefined;

  resto:number | undefined
  mapContainer: any;
  chart2: any;

  constructor( private http:HttpClient ,private _auth:DessertService) {
   // this.auth.getAllMenu3().subscribe(data=> this.dataArray1=data)
   }
 
 
  
 
   ngOnInit() { 
     this._auth.getClientCount().subscribe(
       (response) => {
         this.clientCount = response.count;
         this.createChart();
         this.createChart2();
       },
       (error) => {
         this.error = error;
       }
     );
 
     this._auth.getRestoCount().subscribe(
       (response) => {
         this.resto = response.count;
         this.createChart();
         this.createChart2();
       },
       (error) => {
         this.error = error;
       }
     );
     
   }
  initMap() {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.createChart();
    this.createChart2();
  }
 
   createChart() {
     if (this.clientCount && this.resto) {
       const ctx = document.getElementById('chart1') as HTMLCanvasElement;
       new Chart(ctx, {
         type: 'line',
         data: {
           labels: ['Clients', 'Restaurants'],
           datasets: [{
             label: 'Statistiques',
             data: [this.clientCount, this.resto],
             backgroundColor: '#ff7300',
             borderColor: '#ff7300',
             borderWidth: 1,
             fill: false
           }]
         },
         options: {
           responsive: true,
           scales: {
            
           }
         }
       });
       
     }

     
   }

   
 

//cercle
createChart2() {
  if (this.resto && this.clientCount) {
  const ctx = document.getElementById('chart2') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [' Les restaurants', 'Les clients'],
      datasets: [{
        data: [this.resto, this.clientCount],
        backgroundColor: ['#ff7300', '#906294', '#ffffff'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,

      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}}











}


  
