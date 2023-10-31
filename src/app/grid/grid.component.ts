import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GridService } from '../services/grid.service';
import { Grid } from '../models/grid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  grids$: Observable<Grid[]>;
  selectedGrid: Grid;

  constructor(private gridService: GridService) {
    this.grids$ = of([]);
    this.selectedGrid = {
      id: null,
      name: '',
      gridItems: [],
    };
  }

  ngOnInit(): void {
    this.loadGrids();
  }

  loadGrids() {
    this.grids$ = this.gridService.getAllGrids();
    this.resetGrid();
  }

  updateGrid(grid: Grid) {
    this.grids$ = this.gridService.updateGrid(grid);
  }

  createGrid(grid: Grid) {
    this.grids$ = this.gridService.createGrid(grid);
  }

  deleteGrid(grid: Grid) {
    this.grids$ = this.gridService.deleteGrid(grid);
  }

  selectGrid(grid: Grid) {
    this.selectedGrid = grid;
  }

  saveGrid(grid: Grid) {
    if (grid.id) {
      this.updateGrid(grid);
    } else {
      this.createGrid(grid);
    }
    this.resetGrid();
  }

  resetGrid() {
    const emptyGrid: Grid = {
      id: null,
      name: '',
      gridItems: Array(25).fill({ id: null, status: 'None' }),
    };

    this.selectGrid(emptyGrid);
  }
}
