import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private BASE_URL:string = "http://localhost:8080/api/clientes"
  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http: HttpClient) { }

  clienteList() : Observable<any>{
    return this.http.get(this.BASE_URL)
  }

  addCliente(contact:Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.BASE_URL + '/save', contact, {headers: this.httpHeaders})
  }
}
