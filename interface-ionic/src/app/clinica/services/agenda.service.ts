import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AgendaModel } from '../models/agenda.model'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  agendamentoGet(): Observable<any> {
    return this.http.get(environment.apiUrl + 'agendamento');
  }

  agendamentoPost(agenda: AgendaModel): Observable<any> {
    return this.http.post(environment.apiUrl + 'agendamento', agenda);
  }

  agendamentoPatchId(id: any, agenda: AgendaModel): Observable<any> {
    return this.http.patch(environment.apiUrl + 'agendamento' + '/' + id, agenda);
  }

  agendamentoDeleteId(id: any) {
    return this.http.delete(environment.apiUrl + 'agendamento' + '/' + id);
  }
}
