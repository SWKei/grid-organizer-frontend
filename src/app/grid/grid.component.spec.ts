import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

import { GridComponent } from './grid.component';
import { GridService } from '../services/grid.service';
import { Grid } from '../models/grid';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let gridServiceSpy: jasmine.SpyObj<GridService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('GridService', [
      'getAllGrids',
      'updateGrid',
      'createGrid',
      'deleteGrid',
    ]);

    TestBed.configureTestingModule({
      declarations: [GridComponent, GridListComponent, GridDetailsComponent],
      providers: [{ provide: GridService, useValue: spy }],
      imports: [NgbModule],
    });

    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    gridServiceSpy = TestBed.inject(GridService) as jasmine.SpyObj<GridService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load grids on ngOnInit', () => {
    const mockGrids: Grid[] = [
      { id: 1, name: 'Grid X', gridItems: [] },
      { id: 2, name: 'Grid Y', gridItems: [] },
    ];

    gridServiceSpy.getAllGrids.and.returnValue(of(mockGrids));

    component.ngOnInit();

    expect(component.grids).toEqual(mockGrids);
  });

  it('should update a grid on updateGrid', () => {
    const mockGrid: Grid = { id: 1, name: 'Grid X', gridItems: [] };

    gridServiceSpy.updateGrid.and.returnValue(of([mockGrid]));

    component.updateGrid(mockGrid);

    expect(component.grids).toEqual([mockGrid]);
  });

  it('should create a grid on createGrid', () => {
    const mockGrid: Grid = { id: 1, name: 'Grid X', gridItems: [] };

    gridServiceSpy.createGrid.and.returnValue(of([mockGrid]));

    component.createGrid(mockGrid);

    expect(component.grids).toEqual([mockGrid]);
  });

  it('should delete a grid on deleteGrid', () => {
    const mockGrid: Grid = { id: 1, name: 'Grid X', gridItems: [] };

    gridServiceSpy.deleteGrid.and.returnValue(of([]));

    component.deleteGrid(mockGrid);

    expect(component.grids).toEqual([]);
  });
});
