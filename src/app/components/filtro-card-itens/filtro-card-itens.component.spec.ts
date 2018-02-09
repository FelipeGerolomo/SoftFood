import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCardItensComponent } from './filtro-card-itens.component';

describe('FiltroCardItensComponent', () => {
  let component: FiltroCardItensComponent;
  let fixture: ComponentFixture<FiltroCardItensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroCardItensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCardItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
