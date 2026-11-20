import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Pokeapi {
  private http = inject(HttpClient);
  private url = 'https://pokeapi.co/api/v2';

  getPokemon(nameOrId: string): Observable<any> {
    return this.http.get(`${this.url}/pokemon/${nameOrId.trim().toLowerCase()}`);
  }

  getType(typeName: string): Observable<any> {
    return this.http.get(`${this.url}/type/${typeName.toLowerCase()}`);
  }

  getAbility(abilityName: string): Observable<any> {
    return this.http.get(`${this.url}/ability/${abilityName.toLowerCase()}`);
  }
}