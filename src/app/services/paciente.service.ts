
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, concatMap, delay, finalize, map, Observable, of, timer } from 'rxjs';

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

  // map() — Exemplo: listar apenas nomes dos pacientes
  listarNomesPacientes() {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      map(pacientes => pacientes.map(p => p.nome))
    );
  }

  // of() — Exemplo: simular mensagens de boas-vindas
  mensagensBoasVindas() {
    return of(
      'Bem-vindo ao Portal do Paciente',
      'Confira seus exames',
      'Agende sua próxima consulta'
    );
  }

  // catchError() — Exemplo: buscar paciente inexistente
  buscarPacienteComErro() {
    return this.httpClient.get(this.apiUrl + '/999').pipe(
      catchError(err => {
        console.error('Erro ao buscar paciente:', err);
        return of({ erro: true, mensagem: 'Paciente não encontrado' });
      })
    );
  }

  // concatMap() — Exemplo: notificar pacientes um por vez
  notificarPacientes() {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      concatMap(pacientes =>
        of(...pacientes).pipe(
          concatMap(p =>
            timer(1000).pipe(map(() => `Notificação enviada para ${p.nome}`))
          )
        )
      )
    );
  }

  // filter() — Exemplo: pacientes acima de 40 anos
  pacientesAcimaDe40() {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      map(pacientes => pacientes.filter(p => p.idade > 40))
    );
  }

  // delay() — Exemplo: simular tempo de processamento de laudo
  gerarLaudo() {
    return of('Laudo médico gerado com sucesso').pipe(
      delay(2000)
    );
  }

  // finalize() — Exemplo: finalizar carregamento de histórico
  carregarHistorico() {
    return this.httpClient.get(this.apiUrl).pipe(
      delay(1000),
      finalize(() => console.log('Histórico do paciente carregado!'))
    );
  }

}
