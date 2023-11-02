import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Grid } from 'src/app/models/grid';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent implements OnInit {
  @Input() grids: Grid[] = [];
  @Output() gridSelected = new EventEmitter<Grid>();
  @Output() gridDeleted = new EventEmitter<Grid>();

  currentPage = 1;
  itemsPerPage = 5;

  constructor() {}

  ngOnInit(): void {}

  selectGrid(grid: Grid) {
    this.gridSelected.emit(grid);
  }

  deleteGrid(grid: Grid) {
    this.gridDeleted.emit(grid);
  }

  // Calculate pagedGrids based on the current page and items per page
  get pagedGrids(): Grid[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.grids.slice(startIndex, endIndex);
  }
}
