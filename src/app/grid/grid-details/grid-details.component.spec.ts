import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridDetailsComponent } from './grid-details.component';
import { Grid } from 'src/app/models/grid';

describe('GridDetailsComponent', () => {
  let component: GridDetailsComponent;
  let fixture: ComponentFixture<GridDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDetailsComponent],
    });

    fixture = TestBed.createComponent(GridDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set originalName and currentGrid on selectedGrid input', () => {
    const mockGrid: Grid = { id: 1, name: 'Grid 1', gridItems: [] };

    component.selectedGrid = mockGrid;

    expect(component.originalName).toEqual(mockGrid.name);
    expect(component.currentGrid).toEqual(mockGrid);
  });

  it('should update status on updateStatus', () => {
    const mockGrid: Grid = {
      id: 1,
      name: 'Grid 1',
      gridItems: [{ id: 1, status: 'None' }],
    };

    component.currentGrid = mockGrid;
    component.updateStatus(mockGrid.gridItems[0], 0);

    expect(component.currentGrid?.gridItems[0].status).toEqual('Ok');
  });
});
