import { Injectable } from '@angular/core';
import { Company } from '../class/company.class';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyApiService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'X-LC-Id': 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz',
    'X-LC-Key': '8JzRYWYugrTDC4phdOPCqhB3'
  });

  private api_url = 'https://api.leancloud.cn/1.1/classes/company';

  constructor(private http: Http) { }

  query(): Promise<Company[]> {
    return this.http.get(this.api_url, {
      headers: this.headers
    }).toPromise().then( res => res.json().results as Company[]);
  }

  get( id: string ): Promise<Company> {
    const getUrl = `${this.api_url}/${id}`;
    return this.http.get(getUrl, {
      headers: this.headers
    }).toPromise().then( res => res.json() as Company );
  }

}
