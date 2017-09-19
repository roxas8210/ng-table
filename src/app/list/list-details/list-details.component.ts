import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompanyApiService } from '../company-api.service';
import { Company } from '../../class/company.class';
import { MdDatepicker } from '@angular/material';

@Component({
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  private company: Company;
  private picker;

  constructor(
    @Inject('companyApiService') private service,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const objId = this.route.params['value'];
    console.log(objId);
    this.service.get(objId.id).then( res => {
      this.company = res;
      console.log(this.company);
      this.picker = res.orderDate;
    });
  }

  onInput(event) {
    const today = event.value;
    const yestoday = this.company.createDate;
    console.log( typeof(yestoday) );
    console.log( typeof(today) );
    console.log(yestoday instanceof Date);
    console.log(today instanceof Date);
    this.company.orderDate = today;
    console.log(this.company);
    this.service.update(this.company.objectId, this.company).then( res => {
      console.log(res);
    });
  }

}
