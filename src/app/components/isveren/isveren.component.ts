import { isverenServices } from './../../services/isverenServices';
import { isverenKayit } from './../../models/isverenKayit';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isveren',
  templateUrl: './isveren.component.html',
  styleUrls: ['./isveren.component.css']
})
export class IsverenComponent implements OnInit {
  kayitlar: any;
  durum: string = "Boş Alan Bırakmayınız";
  sonuc: boolean = true;
  giris: boolean = false;;
  girisMesaj: string;
  seckayit: isverenKayit = new isverenKayit();
  constructor(
    public Fbservice: isverenServices,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  Kaydet() {
    var tarih = new Date();
    this.seckayit.kayitTarih = tarih.getTime().toString();
    this.Fbservice.uyeOl(this.seckayit).then(d => {
      d.user.updateProfile({
        displayName: "isletme"
      }).then();
      this.seckayit.uid = d.user.uid;

      localStorage.setItem("user", JSON.stringify(d.user));
      this.uyeEkle();

    }, err => {
      this.durum = "Kayıt başarısız E mail adresi kullanılıyor olabilir.";
      this.sonuc = false;

    })
  }

  uyeEkle() {
    this.Fbservice.UyeEkle(this.seckayit).then(d => {
      this.durum = "Kayıt Başarılı";
      this.sonuc = true;
    });
  }
  oturumAc(mail: string, parola: string) {
    this.Fbservice.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/isveren/ilanpaylas']);
      }
    }, err => {
      this.giris = true;
      this.girisMesaj = "Giriş Başarısız.";
    });
  }
  oturumKapat() {
    this.Fbservice.OturumKapat();
  }

}
