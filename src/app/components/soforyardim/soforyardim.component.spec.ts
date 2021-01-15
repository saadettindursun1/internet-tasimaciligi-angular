import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoforyardimComponent } from './soforyardim.component';

describe('SoforyardimComponent', () => {
  let component: SoforyardimComponent;
  let fixture: ComponentFixture<SoforyardimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoforyardimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoforyardimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
