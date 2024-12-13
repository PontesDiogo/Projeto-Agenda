import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compromisso } from './compromisso';
@Injectable({
  providedIn: 'root'
})
export class CompromissosService {

  private apiUrl = 'http://localhost:8080/compromissos';  
  constructor(private http: HttpClient) { } 

  getCompromissos(): Observable<Compromisso[]> {
    return this.http.get<Compromisso[]>(this.apiUrl);
  }

  getCompromissosById(id:number): Observable<Compromisso>{
    return this.http.get<Compromisso>(`${this.apiUrl}/${id}`);
  }

  delete(compromissos: Compromisso):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${compromissos.id}`)
  }

  update(compromissos: Compromisso):Observable<Compromisso>{
    return this.http.put<Compromisso>(`${this.apiUrl}/${compromissos.id}`,compromissos);
  };

  save(compromissos: Compromisso):Observable<Compromisso>{
    return this.http.post<Compromisso>(this.apiUrl, compromissos);
  };

  cancelar(comproissos: Compromisso):Observable<Compromisso>{
    return this.http.delete<Compromisso>(`${this.apiUrl}/${comproissos.id}`);
  }
}
