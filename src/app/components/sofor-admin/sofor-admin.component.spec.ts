import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoforAdminComponent } from './sofor-admin.component';

describe('SoforAdminComponent', () => {
  let component: SoforAdminComponent;
  let fixture: ComponentFixture<SoforAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoforAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoforAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
