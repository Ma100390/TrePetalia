import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaccompagnamentoComponent } from './paccompagnamento.component';

describe('PaccompagnamentoComponent', () => {
  let component: PaccompagnamentoComponent;
  let fixture: ComponentFixture<PaccompagnamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaccompagnamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaccompagnamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
