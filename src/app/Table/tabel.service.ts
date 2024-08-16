import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Tabel } from './tabel';

@Injectable({
  providedIn: 'root'
})
export class TabelService {
  getData() {
    return [
      {
        id: 1,
        img : './../../assets/img/pexels-pixabay-415829.jpg',
        user : 'احمد محمود',
        phoneNumber: 12345678,
        ticketNumber : 'C-101',
        price : 40,
        cinema : 'سينما مصر , مول العرب , برج الاطنان , سرايا القبة',
        numUser : 1,
        numPrice : 'مرة واحدة' ,
        ticket : ' تذكره رقم PDF.45',
        vTicket : '9mb.PDF'
      },
      {
        id: 2,
        img : './../../assets/img/pexels-pixabay-415829.jpg',
        user : 'احمد محمود',
        phoneNumber: 12345678,
        ticketNumber : 'C-101',
        price : 40,
        cinema : 'سينما مصر , مول العرب , برج الاطنان , سرايا القبة',
        numUser : 1,
        numPrice : 'مرة واحدة' ,
        ticket : ' تذكره رقم PDF.45',
        vTicket : '9mb.PDF'
      },
      {
        id: 3,
        img : './../../assets/img/pexels-pixabay-415829.jpg',
        user : 'احمد محمود',
        phoneNumber: 12345678,
        ticketNumber : 'C-101',
        price : 40,
        cinema : 'سينما مصر , مول العرب , برج الاطنان , سرايا القبة',
        numUser : 1,
        numPrice : 'مرة واحدة' ,
        ticket : ' تذكره رقم PDF.45',
        vTicket : '9mb.PDF'
      },
      {
        id:4,
        img : './../../assets/img/pexels-pixabay-415829.jpg',
        user : 'احمد محمود',
        phoneNumber: 12345678,
        ticketNumber : 'C-101',
        price : 40,
        cinema : 'سينما مصر , مول العرب , برج الاطنان , سرايا القبة',
        numUser : 1,
        numPrice : 'مرة واحدة' ,
        ticket : ' تذكره رقم PDF.45',
        vTicket : '9mb.PDF'
      },
        ];
    }

    constructor(private http: HttpClient) { }
    getCustomersMini():Observable<Tabel[]> {
      return of(this.getData().slice(0,5))
      // return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall():Observable<Tabel[]> {
      return of(this.getData().slice(0,10));
      // return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium():Observable<Tabel[]> {
      return of(this.getData().slice(0,50));
      // return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge():Observable<Tabel[]> {
      return of(this.getData().slice(0,200));
      // return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge():Observable<Tabel[]> {
      return of(this.getData())
      // return Promise.resolve(this.getData());
    }

    getCustomers(params?: any):Observable<Tabel[]> {
      return this.http.get<Tabel[]>('https://www.primefaces.org/data/customers' ,{ params: params })
      // return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }

}
