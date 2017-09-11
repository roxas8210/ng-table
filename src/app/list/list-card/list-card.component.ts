import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../class/company.class';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() list: Company;

  constructor() { }

  update(): void {
    console.log(this);
  }

  ngOnInit() {

  }

}
