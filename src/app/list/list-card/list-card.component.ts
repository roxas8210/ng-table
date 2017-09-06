import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompanyService } from "../company.service";
import { Company } from "../../class/company.class";

@Component({
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  public initList: Company = new Company();
  
  public lists: Company[] = [];
  public getAll: boolean = true;
  
  constructor( private companyService: CompanyService, private ref: ChangeDetectorRef ) { }

  getList(): void {
    this.companyService.query().then( res => {
      this.lists = [...res];
      this.getAll = true;
      console.log(this.lists); 
      this.ref.detectChanges();
    });
  }
  
  ngOnInit() {
    this.getList();
  }

  ngOnChanges() {
    
  }

}
