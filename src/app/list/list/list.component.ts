import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
// import { CompanyService } from "../company.service";
import { Company } from "../../class/company.class";

@Component({
  // selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public initList: Company = new Company();

  public lists: Company[] = [];
  public getAll: boolean = false;

  constructor(@Inject('companyApiService') private service , private ref: ChangeDetectorRef) { }

  getList(): void {
    this.service.query().then(res => {
      console.log('更新成功');
      this.getAll = true;
      this.lists = [...res];
      console.log(this.lists);
    });
  }

  update(): void {

  }

  ngOnInit(): void {
    this.getList();
    console.log('正在初始化list组件');
  }

  ngOnChanges() {

  }
}
