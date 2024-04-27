import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFloatingComponent } from './buttons-floating.component';

describe('ButtonsFloatingComponent', () => {
  let component: ButtonsFloatingComponent;
  let fixture: ComponentFixture<ButtonsFloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsFloatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsFloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
