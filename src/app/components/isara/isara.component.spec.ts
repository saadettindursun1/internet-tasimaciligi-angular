import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaraComponent } from './isara.component';

describe('IsaraComponent', () => {
  let component: IsaraComponent;
  let fixture: ComponentFixture<IsaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
