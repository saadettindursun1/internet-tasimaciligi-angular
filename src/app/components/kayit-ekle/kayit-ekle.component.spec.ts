import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitEkleComponent } from './kayit-ekle.component';

describe('KayitEkleComponent', () => {
  let component: KayitEkleComponent;
  let fixture: ComponentFixture<KayitEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayitEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
