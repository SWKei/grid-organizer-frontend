import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GridService } from '../services/grid.service';
import { Grid } from '../models/grid';
import { GridItem } from '../models/grid-item';

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
      id: undefined,
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
    // Each gridItem needs unique identity when creating a new grid.
    // Changing the value in one <input> affects all the inputs otherwise with Angular two-way databinding
    // Add a temporary property 'name' to solve the issue.

    const gridItemsArray: GridItem[] = Array(25)
      .fill({ id: undefined, status: 'None' })
      .map((item, index) => ({
        id: undefined,
        name: `input-${index + 1}`,
        status: item.status,
      }));

    const emptyGrid: Grid = {
      id: undefined,
      name: '',
      gridItems: gridItemsArray,
    };

    this.selectGrid(emptyGrid);
  }
}
