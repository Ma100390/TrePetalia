import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcontattiComponent } from './pcontatti.component';

describe('PcontattiComponent', () => {
  let component: PcontattiComponent;
  let fixture: ComponentFixture<PcontattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcontattiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcontattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
