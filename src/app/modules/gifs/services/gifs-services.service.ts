import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from './interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServicesService {
  private apiKey: string = 'jNe7tZR31pI905obviyFtWKDubTGXCdV';
  private _historial: string[] = [];
  public resulados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    if (localStorage.getItem('resultado')) {
      this.resulados = JSON.parse(localStorage.getItem('resultado')!);
    }
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=jNe7tZR31pI905obviyFtWKDubTGXCdV&q=${query}&limit=10`)
      .subscribe((resp) => {
        this.resulados = resp.data
        localStorage.setItem('resultado', JSON.stringify(this.resulados));
      })

  }
}
