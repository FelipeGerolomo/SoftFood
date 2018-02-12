import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartClienteInformationComponent } from './cart-cliente-information.component';

describe('CartClienteInformationComponent', () => {
  let component: CartClienteInformationComponent;
  let fixture: ComponentFixture<CartClienteInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartClienteInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartClienteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
