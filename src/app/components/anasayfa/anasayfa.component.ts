import { iletisimServices } from './../../services/iletisimServices';
import { iletisim } from './../../models/iletisim';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {

  durum: string = "Lütfen boş alan bırakmayınız.";
  seckayit: iletisim = new iletisim();
  constructor(
    public Fbservice: iletisimServices
  ) { }

  ngOnInit(): void {
  }
  Kaydet() {
    if (this.seckayit.adsoyad.length < 2 || this.seckayit.posta.length < 2 || this.seckayit.mesaj.length < 2) {


    }
    else {
      var tarih = new Date();
      if (this.seckayit.key == null) {
        this.seckayit.kayitTarih = tarih.getTime().toString();
        this.Fbservice.KayitEkle(this.seckayit).then(s => {
          this.durum = "Mesajınız iletildi en kısa zamanda dönüş yapılacaktır.";
        });
      }

    }
  }
}
