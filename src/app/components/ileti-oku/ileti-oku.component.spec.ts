import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IletiOkuComponent } from './ileti-oku.component';

describe('IletiOkuComponent', () => {
  let component: IletiOkuComponent;
  let fixture: ComponentFixture<IletiOkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IletiOkuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IletiOkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
