import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PserviziComponent } from './pservizi.component';

describe('PserviziComponent', () => {
  let component: PserviziComponent;
  let fixture: ComponentFixture<PserviziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PserviziComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PserviziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
