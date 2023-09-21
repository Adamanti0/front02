import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { seg_pagina } from '../interfaces/seg_pagina';

@Injectable({
  providedIn: 'root'
})
export class SegPaginaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl=environment.endpoint;
    this.myApiUrl='api/object';
  }
  getAllSegPagina(esquema:string,objeto:string):Observable<seg_pagina[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<seg_pagina[]>(`${this.myAppUrl}${this.myApiUrl}/${esquema}/${objeto}/`,{headers:headers});
  }
}
