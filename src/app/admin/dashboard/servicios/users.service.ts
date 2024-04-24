import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { User } from '@interfaces/user';
import { Observable } from 'rxjs';

interface State {
  users: User[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient)

  // signal private o # -> van a hacer que esta propiedad solo sea visible en el servicio
  #state = signal<State>({
    users: [],
    loading: true
  })
  // signal computed  -> esto me permite crear una nueva propiedad llamada usuario que es solo de lectura
  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)

  constructor() {
    //cargar la data
    this.getUsers()
    console.log("cargando la data")
  }

  private getUsers() {
    return this.http.get<User[]>(`${environment.baseUrl}/users?limit=25`).subscribe((data) => {
      this.#state.set({
        users: data,
        loading: false
      })
    })
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/users/${id}`)
  }
  createUser(body: User): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/users`, body)
  }
  updateUser({ id, body }: { id: number, body: { [id: string]: any } }): Observable<User> {
    return this.http.put<User>(`${environment.baseUrl}/users/${id}`, body)
  }
}
