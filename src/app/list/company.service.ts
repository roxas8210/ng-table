import { Injectable } from '@angular/core';
import { leancloud } from "../class/leancloud.class";
import * as AV from "leancloud-storage";
import { Company } from "../class/company.class";

@Injectable()
export class CompanyService {

  private av: leancloud;
  private company: AV.Object;
  private companyQuery: AV.Query;

  constructor() {
    let companyObj = AV.Object.extend('company');
    this.av = new leancloud();
    this.company = new companyObj();
    this.companyQuery = new AV.Query('company');
  }

  public query(): Promise<Company[]> {
    return this.companyQuery.find().then( res => {
      let data: Company[] = [];
       Array.prototype.map.call(res, (element,index) => {
         let id = element.id;
         element.attributes.objectId = id;
         data.push(element.attributes);
      });
      return data;
    });
  }

  // public query(): Promise<Company[]> {
  //   return this.companyQuery.find().then( res => res as Company[] );
  // }

}
