import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileMiniComponent } from './card-profile-mini.component';

describe('CardProfileMiniComponent', () => {
  let component: CardProfileMiniComponent;
  let fixture: ComponentFixture<CardProfileMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProfileMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProfileMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
