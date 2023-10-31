import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Grid } from 'src/app/models/grid';

@Component({
  selector: 'app-grid-details',
  templateUrl: './grid-details.component.html',
  styleUrls: ['./grid-details.component.scss'],
})
export class GridDetailsComponent implements OnInit {
  @Input() set selectedGrid(value: Grid) {
    if (value?.name) {
      this.originalName = value.name;
    }
    this.currentGrid = Object.assign({}, value);
  }
  @Output() gridSaved = new EventEmitter<Grid>();
  @Output() gridCancelled = new EventEmitter();

  originalName: string | undefined;
  currentGrid: Grid | undefined;

  constructor() {}

  ngOnInit(): void {}

  saveGrid(grid: Grid) {
    this.gridSaved.emit(grid);
  }

  cancelGrid() {
    this.gridCancelled.emit();
  }
}
