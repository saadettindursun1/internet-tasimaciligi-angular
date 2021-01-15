import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerilenislerComponent } from './verilenisler.component';

describe('VerilenislerComponent', () => {
  let component: VerilenislerComponent;
  let fixture: ComponentFixture<VerilenislerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerilenislerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerilenislerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
