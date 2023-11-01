import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Grid } from 'src/app/models/grid';
import { GridItem } from 'src/app/models/grid-item';

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

  showForm: boolean = false;

  buttonLabels = ['None', 'Ok', 'Warning', 'Error'];
  statusIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  createNew() {
    this.showForm = true;
  }

  hideForm() {
    this.showForm = false;
  }

  saveGrid(grid: Grid) {
    this.gridSaved.emit(grid);
    this.hideForm();
  }

  cancelGrid() {
    this.gridCancelled.emit();
    this.hideForm();
  }

  updateStatus(gridItem: GridItem, index: number) {
    if (this.currentGrid) {
      const status = gridItem.status;

      if (status === 'None') {
        this.currentGrid.gridItems[index].status = 'Ok';
      } else if (status === 'Ok') {
        this.currentGrid.gridItems[index].status = 'Warning';
      } else if (status === 'Warning') {
        this.currentGrid.gridItems[index].status = 'Error';
      } else {
        this.currentGrid.gridItems[index].status = 'None';
      }
    }
  }
}
