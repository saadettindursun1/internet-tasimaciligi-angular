import { Router } from '@angular/router';
import { isverenKayit } from './../../models/isverenKayit';
import { isverenServices } from './../../services/isverenServices';
import { ilanService } from './../../services/ilanService';
import { ilanPaylas } from './../../models/ilanPaylas';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-ilanpaylas',
  templateUrl: './ilanpaylas.component.html',
  styleUrls: ['./ilanpaylas.component.css']
})
export class IlanpaylasComponent implements OnInit {
  kayitlar: any;
  uid: string;
  rol: string;
  sonuc: boolean = false;
  giris: boolean = false;;
  durum: string;
  seckayit: ilanPaylas = new ilanPaylas();

  constructor(
    public Fbservice: ilanService,
    public Fbservice2: isverenServices,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.rolKontrol();
    this.KayitListele();
  }
  Kaydet() {
    var tarih = new Date();
    if (this.seckayit.key == null) {
      this.seckayit.verildimi = false;
      this.seckayit.kayitTarih = tarih.getTime().toString();
      this.Fbservice.KayitEkle(this.seckayit).then(s => {
        this.durum = "İş Paylaşıldı";
        this.sonuc = true;
      });
    }
  }

  rolKontrol() {
    if (this.rol != "isletme") {
      this.router.navigate(['']);
    }
  }

  KayitListele() {

    this.Fbservice2.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as isverenKayit)
      })
    });

  }
}
