import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListInfoComponent } from './container-list-info.component';

describe('ContainerListInfoComponent', () => {
  let component: ContainerListInfoComponent;
  let fixture: ComponentFixture<ContainerListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerListInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
