import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@interfaces/categories';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)
  constructor() { }


  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.baseUrl}/categories`)
  }
  getCategoryById(id: number): Observable<Category>{
    return this.http.get<Category>(`${environment.baseUrl}/categories/${id}`)
  }

  createCategory(body: Category){
    this.http.post(`${environment.baseUrl}/categories`, body)
  }

  updateCategory({id, body}: {id: number, body:{[id: string]: any}}): Observable<Category>{
    return this.http.put<Category>(`${environment.baseUrl}/categories/${id}`, body)
  }

}
