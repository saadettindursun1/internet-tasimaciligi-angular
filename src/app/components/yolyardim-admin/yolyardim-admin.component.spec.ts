import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YolyardimAdminComponent } from './yolyardim-admin.component';

describe('YolyardimAdminComponent', () => {
  let component: YolyardimAdminComponent;
  let fixture: ComponentFixture<YolyardimAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YolyardimAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YolyardimAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
