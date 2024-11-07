import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassistenzadomiciliareComponent } from './passistenzadomiciliare.component';

describe('PassistenzadomiciliareComponent', () => {
  let component: PassistenzadomiciliareComponent;
  let fixture: ComponentFixture<PassistenzadomiciliareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassistenzadomiciliareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassistenzadomiciliareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
