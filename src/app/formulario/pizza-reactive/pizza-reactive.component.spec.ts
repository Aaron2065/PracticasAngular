import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaReactiveComponent } from './pizza-reactive.component';

describe('PizzaReactiveComponent', () => {
  let component: PizzaReactiveComponent;
  let fixture: ComponentFixture<PizzaReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaReactiveComponent]
    });
    fixture = TestBed.createComponent(PizzaReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
