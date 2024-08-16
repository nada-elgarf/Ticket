import { Component, OnInit } from '@angular/core';
import { TabelService } from './tabel.service';
import { Tabel } from './tabel';


@Component({
  selector: 'app-Table',
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css']
})
export class TableComponent implements OnInit {

  customers: Tabel[] = [];



  pageNumbers:number[] = [];
  pageSize = 5;
  page =1;
  first = 0;
  rows = 10;


 constructor(private customerService : TabelService ){}

 ngOnInit(): void {
  this.customerService.getCustomersLarge().subscribe(res => {
    this.customers = res ;
  })
  // this.customerService.getCustomersLarge().then((customers : any) => customers = customers);
 }


 next() {
  this.first = this.first + this.rows;
}

prev() {
  this.first = this.first - this.rows;
}

reset() {
  this.first = 0;
}

isLastPage(): boolean {
  return this.customers ? this.first === (this.customers.length - this.rows): true;
}

isFirstPage(): boolean {
  return this.customers ? this.first === 0 : true;
}



}
