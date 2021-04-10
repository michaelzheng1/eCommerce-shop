import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../common/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8080/api/items';
  constructor(private httpClient : HttpClient) { }

  getItemList(categoryId: number): Observable<Item[]> {

    // @TODO: need to build URL based on category id
    const searchUrl =  `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.items)
    )
  }
}

interface GetResponse {
  _embedded: {
    items: Item[];
    
  }
}