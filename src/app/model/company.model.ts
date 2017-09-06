import { leancloud } from "../class/leancloud.class";
import * as AV from "leancloud-storage";
import { Company } from "../class/company.class";

export class CompanyModel{
    private av = new leancloud();
    private company;
    private companyQuery = new AV.Query('company');

    constructor() {
        let companyObj = AV.Object.extend('company');
        this.company = new companyObj();
    }

    public insertCompany(companyObject:object): Promise<any> {
        for( let key in companyObject ) {
            this.company.set(key,companyObject[key]);
        }
        return this.company.save();
    }

    public destroy(id: string): Promise<any> {
        let CompanyWithoutData = AV.Object.createWithoutData('company',id);
        return CompanyWithoutData.destroy();
    }

    // public query(): Promise<any> {
    //     return this.companyQuery.find();
    // }

    public query(): Company[] {
        let queryData = [];
        this.companyQuery.find().then( res => {
            Array.prototype.map.call(res, (element,index) => {
                element.attributes.objectId = element.id;
                queryData.push(element.attributes);
            });
        });
        return queryData;
    }

    // public query(): Promise<Company[]> {
    //     let queryData: Company[] = [];
    //     return this.companyQuery.find().then( res => {
    //         Array.prototype.map.call(res, (element,index) => {
    //             element.attributes.objectId = element.id;
    //             queryData.push(element.attributes);
    //         });
    //         return queryData;
    //     });
    // }

    public get(id: string): Promise<any> {
        return this.companyQuery.get(id);
    }

    // public update(id: string, dataObj: AV.Object[]): Promise<any> {
    //     // let companyUpdate: AV.Object[] = AV.Object.createWithoutData('company', id);
    //     // for( let key in dataObj ) {
    //     //     companyUpdate.set( key, dataObj[key] );
    //     // }

    //     return AV.Object.saveAll(dataObj);
    // }

    public update(id: string, dataObj: object): Promise<any> {
        let updateArray: AV.Object[] = new Array();
        let companyUpdate = this.company;
        for( let key in dataObj ) {
            companyUpdate.set(key,dataObj[key]);
        }
        updateArray.push(companyUpdate);
        return AV.Object.saveAll(updateArray);
    }

    public count(): Promise<any> {
        this.company.find()
        return this.company.count();
    }

    public queryPage(pagesize: number, page: number): Promise<any> {
        let query = this.company;
        let skipNum = ( page - 1 ) * pagesize;
        query.skip(skipNum);
        query.limit(pagesize);
        return query.find();
    }
}