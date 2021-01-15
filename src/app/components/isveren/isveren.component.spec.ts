import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsverenComponent } from './isveren.component';

describe('IsverenComponent', () => {
  let component: IsverenComponent;
  let fixture: ComponentFixture<IsverenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsverenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsverenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
