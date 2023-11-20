import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

import { GridService } from '../services/grid.service';
import { Grid } from '../models/grid';
import { GridItem } from '../models/grid-item';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  grids: Grid[] = [];
  selectedGrid: Grid = {
    id: undefined,
    name: '',
    gridItems: [],
  };

  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.loadGrids();
  }

  loadGrids() {
    this.gridService.getAllGrids().subscribe((grids) => {
      this.grids = grids;
      this.resetGrid();
    });
  }

  updateGrid(grid: Grid) {
    this.gridService.updateGrid(grid).subscribe({
      next: (grids: Grid[]) => {
        this.grids = grids;
      },
      error: (error: any) => {
        window.alert(`Error: ${error.error.message}`);
      },
    } as Observer<Grid[]>);
  }

  createGrid(grid: Grid) {
    this.gridService.createGrid(grid).subscribe({
      next: (grids: Grid[]) => {
        this.grids = grids;
      },
      error: (error: any) => {
        window.alert(`Error: ${error.error.message}`);
      },
    } as Observer<Grid[]>);
  }

  deleteGrid(grid: Grid) {
    this.gridService.deleteGrid(grid).subscribe((grids) => {
      this.grids = grids;
    });
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
