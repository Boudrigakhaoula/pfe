import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DessertService } from 'src/app/services/dessert.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-resto',
  templateUrl: './dashboard-resto.component.html',
  styleUrls: ['./dashboard-resto.component.css']
})

export class DashboardRestoComponent implements OnInit {
  Countentree: number | undefined;
  Countdessert: number | undefined;
  Countsuite: number | undefined;
  Countmenu:number|undefined
  error: any;
  chart2: any;
  id:any
  menu: any;
  dessert:any
  suite:any
  entree:any
  commande:any

  constructor(private _auth: DessertService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userAdmin = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    
      // Call the necessary service method here or perform any other logic
      this._auth.getnombredeentree(userAdmin._id).subscribe(
        (data:any) => {
          this.entree = data.entree;
          console.log(this.entree);
          this.createChart();
      
        }
      );
    });
  
    this.route.paramMap.subscribe(params => {
      const userAdmin = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    
      // Call the necessary service method here or perform any other logic
      this._auth.getnombredesuite(userAdmin._id).subscribe(
        (data:any) => {
          this.suite = data.count;
          console.log(this.suite);
          this.createChart();
    
        }
      );
    });
      
    this.route.paramMap.subscribe(params => {
      const userAdmin = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    
      // Call the necessary service method here or perform any other logic
      this._auth.getnombredeentree(userAdmin._id).subscribe(
        (data:any) => {
          this.entree = data.count;
          console.log(this.entree);
          this.createChart();

        }
      );
    });
  
 
    this.route.paramMap.subscribe(params => {
      const userAdmin = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    
      // Call the necessary service method here or perform any other logic
      this._auth.getnombrededessert(userAdmin._id).subscribe(
        (data:any) => {
          this.dessert = data.count;
          console.log(this.dessert);
          this.createChart();
          
        }
      );
    });

    this.route.paramMap.subscribe(params => {
      const userAdmin = JSON.parse(localStorage.getItem('AdminResto') || '{}');
    
      // Call the necessary service method here or perform any other logic
      this._auth.getnombredecommande(userAdmin._id).subscribe(
        (data:any) => {
          this.commande = data.count;
          console.log(this.commande);
          this.createChart();
        
        }
      );
    });

    
  }



ngAfterViewInit() {
  this.createChart();

}
//cercle
createChart() {
  if (this.entree && this.dessert && this.suite) {
  const ctx = document.getElementById('chart1') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Entrée', 'Suite', 'Dessert'],
      datasets: [{
        data: [this.entree, this.suite, this.dessert],
        backgroundColor: ['#ff7300', '#3366cc', '#ffffff'],
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