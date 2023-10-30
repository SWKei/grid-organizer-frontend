import { Component } from '@angular/core';
import { Grid } from './models/grid';
import { GridService } from './services/grid.service';
import { GridResult } from './models/grid-result';
import { GridItem } from './models/grid-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grid-organizer-frontend';
  grids: Grid[] = [];
  gridToEdit?: Grid;

  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.gridService.getAllGrid().subscribe((result: GridResult) => {
      this.grids = result.data;
    });
  }

  initNewGrid() {
    this.gridToEdit = new Grid();

    // Set default status "None" (grey)
    const gridItems: GridItem[] = new Array(25).fill({ status: 'None' });
    this.gridToEdit.gridItems = gridItems;
  }

  editGrid(grid: Grid) {
    this.gridToEdit = grid;
  }

  updateGridList(grids: Grid[]) {
    this.grids = grids;
  }
}
