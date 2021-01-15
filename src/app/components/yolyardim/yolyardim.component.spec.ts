import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YolyardimComponent } from './yolyardim.component';

describe('YolyardimComponent', () => {
  let component: YolyardimComponent;
  let fixture: ComponentFixture<YolyardimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YolyardimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YolyardimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
