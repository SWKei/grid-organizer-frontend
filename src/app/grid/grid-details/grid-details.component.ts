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

      switch (status) {
        case 'None':
          this.currentGrid.gridItems[index].status = 'Ok';
          break;
        case 'Ok':
          this.currentGrid.gridItems[index].status = 'Warning';
          break;
        case 'Warning':
          this.currentGrid.gridItems[index].status = 'Error';
          break;
        default:
          this.currentGrid.gridItems[index].status = 'None';
      }
    }
  }

  getStatusClasses(status: string): { [key: string]: boolean } {
    return {
      'app-none-button': status === 'None',
      'app-ok-button': status === 'Ok',
      'app-warning-button': status === 'Warning',
      'app-error-button ': status === 'Error',
    };
  }
}
