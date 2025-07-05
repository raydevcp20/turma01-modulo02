import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  apiUrl: string = 'http://localhost:3000';
  prefix: string = 'pacientes';
  httpClient = inject(HttpClient);

  constructor() { }

  listarPacientes(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${this.prefix}`);
  }

}
