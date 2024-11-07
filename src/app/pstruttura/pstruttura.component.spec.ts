import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PstrutturaComponent } from './pstruttura.component';

describe('PstrutturaComponent', () => {
  let component: PstrutturaComponent;
  let fixture: ComponentFixture<PstrutturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PstrutturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PstrutturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
