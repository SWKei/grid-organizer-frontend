import { Injectable } from '@angular/core';
import { Grid } from '../models/grid';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private url = 'Grid';
  constructor(private http: HttpClient) {}

  public getAllGrid(): Observable<Grid[]> {
    return this.http.get<Grid[]>(`${environment.apiUrl}/${this.url}/GetAll`);
  }
}
