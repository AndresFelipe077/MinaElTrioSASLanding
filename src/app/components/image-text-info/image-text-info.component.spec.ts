import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTextInfoComponent } from './image-text-info.component';

describe('ImageTextInfoComponent', () => {
  let component: ImageTextInfoComponent;
  let fixture: ComponentFixture<ImageTextInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTextInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageTextInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
