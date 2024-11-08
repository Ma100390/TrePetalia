import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaltriserviziComponent } from './paltriservizi.component';

describe('PaltriserviziComponent', () => {
  let component: PaltriserviziComponent;
  let fixture: ComponentFixture<PaltriserviziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaltriserviziComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaltriserviziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
