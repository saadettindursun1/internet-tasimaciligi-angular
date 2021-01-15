import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanislemComponent } from './ilanislem.component';

describe('IlanislemComponent', () => {
  let component: IlanislemComponent;
  let fixture: ComponentFixture<IlanislemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanislemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanislemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
