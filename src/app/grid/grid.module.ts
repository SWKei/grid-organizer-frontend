import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';

@NgModule({
  declarations: [GridComponent, GridListComponent, GridDetailsComponent],
  imports: [CommonModule, GridRoutingModule, FormsModule],
})
export class GridModule {}
