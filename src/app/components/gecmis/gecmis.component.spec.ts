import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecmisComponent } from './gecmis.component';

describe('GecmisComponent', () => {
  let component: GecmisComponent;
  let fixture: ComponentFixture<GecmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GecmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
