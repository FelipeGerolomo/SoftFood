import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConclusaoComponent } from './cart-conclusao.component';

describe('CartConclusaoComponent', () => {
  let component: CartConclusaoComponent;
  let fixture: ComponentFixture<CartConclusaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartConclusaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartConclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
