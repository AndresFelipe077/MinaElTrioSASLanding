import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImagePageComponent } from './home-image-page.component';

describe('HomeImagePageComponent', () => {
  let component: HomeImagePageComponent;
  let fixture: ComponentFixture<HomeImagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeImagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeImagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
