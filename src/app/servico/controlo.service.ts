import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControloService {
  private url ='https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  public listarOn(paginaOn: number){
    if (paginaOn <=0) {
      paginaOn=1;
    }
    return this.http.get(`${this.url}?page=${paginaOn}`);
  }
  public verOn(id: number){
    return this.http.get(`${this.url}?id=${id}`);
  }
}
