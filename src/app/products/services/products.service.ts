import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Products } from '@interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private http = inject(HttpClient)
  constructor() { }

  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${environment.baseUrl}/products`)
  }

  getProductById(id: number): Observable<Products>{
    return this.http.get<Products>(`${environment.baseUrl}/products/${id}`)
  }

  createProduct(body: Products) {
    this.http.post(`${environment.baseUrl}/products`, body)
  }

  updateProduct({id, body}: {id: number, body:{[id: string]: any}}): Observable<Products> {
    return this.http.put<Products>(`${environment.baseUrl}/products/${id}`, body)
  }
}
