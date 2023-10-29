import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GridResult } from '../models/grid-result';
import { Grid } from '../models/grid';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  private url = 'Grid';
  constructor(private http: HttpClient) {}

  getAllGrid(): Observable<GridResult> {
    return this.http.get<GridResult>(
      `${environment.apiUrl}/${this.url}/GetAll`
    );
  }

  updateGrid(grid: Grid): Observable<GridResult> {
    return this.http.put<GridResult>(`${environment.apiUrl}/${this.url}`, grid);
  }

  createGrid(grid: Grid): Observable<GridResult> {
    return this.http.post<GridResult>(
      `${environment.apiUrl}/${this.url}`,
      grid
    );
  }

  deleteGrid(grid: Grid): Observable<GridResult> {
    return this.http.delete<GridResult>(
      `${environment.apiUrl}/${this.url}/${grid.id}`
    );
  }
}
