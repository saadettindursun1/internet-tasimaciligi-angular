import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yolyardim2Component } from './yolyardim2.component';

describe('Yolyardim2Component', () => {
  let component: Yolyardim2Component;
  let fixture: ComponentFixture<Yolyardim2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Yolyardim2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Yolyardim2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
