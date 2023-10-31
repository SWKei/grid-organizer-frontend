import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GridResult } from '../models/grid-result';
import { Grid } from '../models/grid';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private url = 'Grid';
  constructor(private http: HttpClient) {}

  getAllGrids(): Observable<Grid[]> {
    return this.http
      .get<GridResult>(`${environment.apiUrl}/${this.url}/GetAll`)
      .pipe(map((result: GridResult) => result.data));
  }

  updateGrid(grid: Grid): Observable<Grid[]> {
    return this.http
      .put<GridResult>(`${environment.apiUrl}/${this.url}`, grid)
      .pipe(map((result: GridResult) => result.data));
  }

  createGrid(grid: Grid): Observable<Grid[]> {
    return this.http
      .post<GridResult>(`${environment.apiUrl}/${this.url}`, grid)
      .pipe(map((result: GridResult) => result.data));
  }

  deleteGrid(grid: Grid): Observable<Grid[]> {
    return this.http
      .delete<GridResult>(`${environment.apiUrl}/${this.url}/${grid.id}`)
      .pipe(map((result: GridResult) => result.data));
  }
}
