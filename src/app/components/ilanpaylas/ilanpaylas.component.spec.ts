import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanpaylasComponent } from './ilanpaylas.component';

describe('IlanpaylasComponent', () => {
  let component: IlanpaylasComponent;
  let fixture: ComponentFixture<IlanpaylasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanpaylasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanpaylasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
