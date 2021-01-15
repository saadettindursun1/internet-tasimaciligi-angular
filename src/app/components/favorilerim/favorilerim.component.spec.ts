import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorilerimComponent } from './favorilerim.component';

describe('FavorilerimComponent', () => {
  let component: FavorilerimComponent;
  let fixture: ComponentFixture<FavorilerimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavorilerimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorilerimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
