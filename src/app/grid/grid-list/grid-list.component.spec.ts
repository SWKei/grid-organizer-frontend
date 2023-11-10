import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GridListComponent } from './grid-list.component';
import { Grid } from 'src/app/models/grid';

describe('GridListComponent', () => {
  let component: GridListComponent;
  let fixture: ComponentFixture<GridListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridListComponent],
      imports: [NgbModule],
    });

    fixture = TestBed.createComponent(GridListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate pagedGrids based on currentPage and itemsPerPage', () => {
    const mockGrids: Grid[] = [
      { id: 1, name: 'Grid A', gridItems: [] },
      { id: 2, name: 'Grid B', gridItems: [] },
      { id: 3, name: 'Grid C', gridItems: [] },
      { id: 4, name: 'Grid D', gridItems: [] },
      { id: 5, name: 'Grid E', gridItems: [] },
    ];

    component.grids = mockGrids;
    component.currentPage = 2;
    component.itemsPerPage = 2;

    const pagedGrids = component.pagedGrids;

    expect(pagedGrids).toEqual([mockGrids[2], mockGrids[3]]);
  });
});
