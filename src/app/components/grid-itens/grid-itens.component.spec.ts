import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItensComponent } from './grid-itens.component';

describe('GridItensComponent', () => {
  let component: GridItensComponent;
  let fixture: ComponentFixture<GridItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
