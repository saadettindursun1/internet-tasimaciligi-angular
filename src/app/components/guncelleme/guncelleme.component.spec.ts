import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuncellemeComponent } from './guncelleme.component';

describe('GuncellemeComponent', () => {
  let component: GuncellemeComponent;
  let fixture: ComponentFixture<GuncellemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuncellemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuncellemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
