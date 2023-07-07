import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineReactiveComponent } from './cine-reactive.component';

describe('CineReactiveComponent', () => {
  let component: CineReactiveComponent;
  let fixture: ComponentFixture<CineReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CineReactiveComponent]
    });
    fixture = TestBed.createComponent(CineReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
