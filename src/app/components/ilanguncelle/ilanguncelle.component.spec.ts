import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanguncelleComponent } from './ilanguncelle.component';

describe('IlanguncelleComponent', () => {
  let component: IlanguncelleComponent;
  let fixture: ComponentFixture<IlanguncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanguncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanguncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
