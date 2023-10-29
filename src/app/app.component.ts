import { Component } from '@angular/core';
import { Grid } from './models/grid';
import { GridService } from './services/grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'grid-organizer-frontend';
  grids: Grid[] = [];

  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.gridService
      .getAllGrid()
      .subscribe((result: Grid[]) => (this.grids = result));

    console.log(this.grids);
  }
}
