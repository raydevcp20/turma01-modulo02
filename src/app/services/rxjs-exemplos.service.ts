import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, timer } from 'rxjs';
import { map, catchError, concatMap, filter, delay, finalize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RxjsExemplosService {
  private apiUrl = 'http://localhost:3000/dados';

  constructor(private http: HttpClient) {}

  exemploMap() {
    return of(1, 2, 3).pipe(
      map(num => num * 10)
    );
  }

  exemploOf() {
    return of('Angular', 'RxJS', 'TypeScript');
  }

  exemploCatchError() {
    // URL propositalmente errada para simular erro
    return this.http.get(this.apiUrl + 'x').pipe(
      catchError(err => {
        console.error('Erro capturado:', err);
        return of({ erro: true, mensagem: 'API indisponível' });
      })
    );
  }

  exemploConcatMap() {
    return of('A', 'B', 'C').pipe(
      concatMap(letra => timer(1000).pipe(map(() => `Letra: ${letra}`)))
    );
  }

  exemploFilter() {
    return of(1, 2, 3, 4, 5).pipe(
      filter(num => num % 2 === 0)
    );
  }

  exemploDelay() {
    return of('Mensagem com atraso').pipe(
      delay(2000)
    );
  }

  exemploFinalize() {
    return this.http.get(this.apiUrl).pipe(
      delay(1000),
      finalize(() => console.log('Processo finalizado!'))
    );
  }
}
