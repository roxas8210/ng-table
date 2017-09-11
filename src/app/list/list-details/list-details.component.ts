import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompanyApiService } from '../company-api.service';
import { Company } from '../../class/company.class';

@Component({
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  private company: Company;

  constructor(@Inject('companyApiService') private service , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const objId = this.route.params['value'];
    console.log(objId);
    this.service.get(objId.id).then( res => {
      this.company = res;
      console.log(this.company);
    });
  }

}
