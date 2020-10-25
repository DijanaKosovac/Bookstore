import { Order } from './model/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookList } from './model/bookList';
import { map } from 'rxjs/operators';

const url = 'http://localhost:3000/api/books';
const orderUrl = 'http://localhost:3000/api/orders';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(params?: any): Observable<BookList> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('discount', params.discount || '')
          .set('bestseller', params.bestseller || '')
      }
    }
    return this.http.get(url, queryParams).pipe(map(data => {
      return new BookList(data);
    }))
  }

  postOrder(order: Order): Observable<Order> {
    return this.http.post(orderUrl, order).pipe(map(data => {
      return new Order(data);
    }))
  }
}
