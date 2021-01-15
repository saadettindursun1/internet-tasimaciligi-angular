import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoforayarComponent } from './soforayar.component';

describe('SoforayarComponent', () => {
  let component: SoforayarComponent;
  let fixture: ComponentFixture<SoforayarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoforayarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoforayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
