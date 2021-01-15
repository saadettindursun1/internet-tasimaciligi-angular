import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsletmeAdminComponent } from './isletme-admin.component';

describe('IsletmeAdminComponent', () => {
  let component: IsletmeAdminComponent;
  let fixture: ComponentFixture<IsletmeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsletmeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsletmeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
