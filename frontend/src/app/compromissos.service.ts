import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compromisso } from './compromisso';
@Injectable({
  providedIn: 'root'
})
export class CompromissosService {

  private apiUrl = 'http://localhost:3000/compromissos';
  constructor(private http: HttpClient) { }

  getCompromissos(): Observable<Compromisso[]> {
    return this.http.get<Compromisso[]>(this.apiUrl);
  }

}
