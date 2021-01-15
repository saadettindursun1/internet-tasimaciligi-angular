import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoforComponent } from './sofor.component';

describe('SoforComponent', () => {
  let component: SoforComponent;
  let fixture: ComponentFixture<SoforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
