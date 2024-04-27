import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionEmailComponent } from './subscription-email.component';

describe('SubscriptionEmailComponent', () => {
  let component: SubscriptionEmailComponent;
  let fixture: ComponentFixture<SubscriptionEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
