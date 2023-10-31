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

  constructor() {}

  ngOnInit(): void {}

  selectGrid(grid: Grid) {
    this.gridSelected.emit(grid);
  }

  deleteGrid(grid: Grid) {
    this.gridDeleted.emit(grid);
  }
}
