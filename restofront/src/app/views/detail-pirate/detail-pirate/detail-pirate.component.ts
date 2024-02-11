import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminRestoService } from 'src/app/services/admin-resto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-pirate',
  templateUrl: './detail-pirate.component.html',
  styleUrls: ['./detail-pirate.component.css']
})
export class DetailPirateComponent implements OnInit {
  data:any = [];
  baseurl = environment.url;
  constructor(private router : ActivatedRoute, private AdminRestoServ: AdminRestoService) {
    this.router.paramMap.subscribe(params => {
      const catId = params.get('id');

      this.AdminRestoServ.getAdminRestoById(catId).subscribe(async (data) => {
        console.log(data);
        this.data = data;
      });
    });
  }

  ngOnInit(): void {
  }

}