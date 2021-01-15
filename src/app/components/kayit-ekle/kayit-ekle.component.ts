import { isverenKayit } from './../../models/isverenKayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kayit-ekle',
  templateUrl: './kayit-ekle.component.html',
  styleUrls: ['./kayit-ekle.component.css']
})
export class KayitEkleComponent implements OnInit {

  constructor() { }
  seckayit: isverenKayit = new isverenKayit();
  ngOnInit(): void {
  }
  Kaydet() {

  }
}
