import { Router } from '@angular/router';
import { soforServices } from './../../services/soforService';
import { soforKayit } from './../../models/soforKayit';
import { Component, OnInit } from '@angular/core';
import { uyeSofor } from 'src/app/models/uyeSofor';

@Component({
  selector: 'app-sofor',
  templateUrl: './sofor.component.html',
  styleUrls: ['./sofor.component.css']
})
export class SoforComponent implements OnInit {
  kayitlar: any;
  durum: string;
  durum2: string;
  sonuc: boolean = false;
  sonuc2: boolean = false;
  secUye: uyeSofor = new uyeSofor();
  seckayit: soforKayit = new soforKayit();
  constructor(
    public Fbservice: soforServices,
    public router: Router
  ) { }

  ngOnInit(): void {

  }
  KayitOl() {
    this.Fbservice.uyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: this.secUye.aracTur
      }).then();
      this.secUye.uid = d.user.uid;

      localStorage.setItem("user", JSON.stringify(d.user));
      this.uyeEkle();

    }, err => {
      this.durum2 = "Kayıt başarısız E mail adresi kullanılıyor olabilir.";
      this.sonuc2 = false;

    })
  }

  uyeEkle() {
    this.Fbservice.UyeEkle(this.secUye).then(d => {
      this.durum2 = "Kayıt Başarılı";
      this.sonuc2 = true;
    });
  }


  GirisYap(mail: string, parola: string) {
    this.Fbservice.OturumAc(mail, parola).then(d => {
      this.sonuc = true;
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/sofor/isara']);
    }, err => {
      this.durum = "Giriş Başarısız";
    });
  }


  Kaydet() {
    var tarih = new Date();
    if (this.seckayit.key == null) {

      this.seckayit.kayitTarih = tarih.getTime().toString();
      this.Fbservice.KayitEkle(this.seckayit).then(s => {
        this.durum = "Kayıt Eklendi";
        this.sonuc = true;
      });
    }
  }
}
