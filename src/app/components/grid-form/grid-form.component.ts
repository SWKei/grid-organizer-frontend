import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Grid } from 'src/app/models/grid';
import { GridResult } from 'src/app/models/grid-result';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-grid-form',
  templateUrl: './grid-form.component.html',
  styleUrls: ['./grid-form.component.scss'],
})
export class GridFormComponent implements OnInit {
  @Input() grid?: Grid;
  @Output() gridsUpdated = new EventEmitter<Grid[]>();

  constructor(private gridService: GridService) {}

  ngOnInit(): void {}

  updateGrid(grid: Grid) {
    this.gridService.updateGrid(grid).subscribe((result: GridResult) => {
      this.gridsUpdated.emit(result.data);
    });
  }

  deleteGrid(grid: Grid) {
    this.gridService.deleteGrid(grid).subscribe((result: GridResult) => {
      this.gridsUpdated.emit(result.data);
    });
  }

  createGrid(grid: Grid) {
    this.gridService.createGrid(grid).subscribe((result: GridResult) => {
      this.gridsUpdated.emit(result.data);
    });
  }
}
