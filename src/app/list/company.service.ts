import { Injectable } from '@angular/core';
import { leancloud } from '../class/leancloud.class';
import * as AV from 'leancloud-storage';
import { Company } from '../class/company.class';

@Injectable()
export class CompanyService {

  private av: leancloud;
  private company: AV.Object;
  private companyQuery: AV.Query;

  constructor() {
    const companyObj = AV.Object.extend('company');
    this.av = new leancloud();
    this.company = new companyObj();
    this.companyQuery = new AV.Query('company');
  }

  public query(): Promise<Company[]> {
    return this.companyQuery.find().then( res => {
      const data: Company[] = [];
       Array.prototype.map.call(res, (element, index) => {
         const id = element.id;
         element.attributes.objectId = id;
         data.push(element.attributes);
      });
      return data;
    });
  }

  public insertCompany(companyObj: Company): Promise<Object> {
    for( const key in companyObj ) {
      this.company.set(key,companyObj[key]);
  }
  return this.company.save().then( res => res);
  }

  public update(id: string, dataObj: Company): Promise<Object> {
    let updateArray: AV.Object[] = [];
    let companyUpdate = this.company;
    for( const key in dataObj ) {
        companyUpdate.set(key,dataObj[key]);
    }
    updateArray.push(companyUpdate);
    return AV.Object.saveAll(updateArray).then( res => res );
  }

  public get( id: string ): Promise<Company> {
    return this.companyQuery.get(id).then( res => {
      const data = res['attributes'] ;
      return data;
    });
  }

  // public query(): Promise<Company[]> {
  //   return this.companyQuery.find().then( res => res as Company[] );
  // }

}
