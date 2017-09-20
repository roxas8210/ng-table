import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CompanyApiService } from '../company-api.service';
import { Company } from '../../class/company.class';
// import { MdDatepicker } from '@angular/material';

@Component({
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  private company: Company;
  private pickerDate;
  private uploadPicker;

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
      const pickerString = Date.parse(res.createDate.iso);
      this.pickerDate = new Date(pickerString);
      const finishDate = Date.parse(res.finishDate.iso);
      this.uploadPicker = new Date(finishDate);
      console.log(`order date类型为：${typeof(this.pickerDate)}`);
      console.log(`order date为：${this.pickerDate}`);
    });
  }

  onInput(event) {
    const today = event.value;
    const yestoday = this.company.createDate;
    const todayObj = {
      __type: 'Date',
      iso: today
    };
    this.company.createDate = todayObj;
    console.log(this.company);
    // this.service.update(this.company.objectId, this.company).then( res => {
    //   console.log(res);
    // });
  }

}
