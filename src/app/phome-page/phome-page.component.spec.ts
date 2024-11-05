import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhomePageComponent } from './phome-page.component';

describe('PhomePageComponent', () => {
  let component: PhomePageComponent;
  let fixture: ComponentFixture<PhomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
