import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PchisiamoComponent } from './pchisiamo.component';

describe('PchisiamoComponent', () => {
  let component: PchisiamoComponent;
  let fixture: ComponentFixture<PchisiamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PchisiamoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PchisiamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
