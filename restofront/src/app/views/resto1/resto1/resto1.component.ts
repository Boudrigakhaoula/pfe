import { Component, OnInit } from '@angular/core';
import { AjouteradminRestoService } from 'src/app/services/ajouteradmin-resto.service';
import {environment} from "../../../../environments/environment";
import {AdminRestoService} from "../../../services/admin-resto.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resto1',
  templateUrl: './resto1.component.html',
  styleUrls: ['./resto1.component.css']
})
export class Resto1Component implements OnInit {
  dataArray:any = [];

  baseUrl = environment.url;
  constructor(private _ins:AjouteradminRestoService, private AdminRestoService: AdminRestoService, private route:ActivatedRoute){

    this._ins.getall_adminresto().subscribe(data=>this.dataArray=data)

    this.AdminRestoService.getall_adminresto().subscribe((data : any)=> {
      this.dataArray=data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }


  protected readonly environment = environment;
}
