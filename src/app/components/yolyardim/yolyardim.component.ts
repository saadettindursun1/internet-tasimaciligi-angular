import { Router } from '@angular/router';
import { soforServices } from './../../services/soforService';
import { FbserviceService } from './../../services/fbservice.service';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-yolyardim',
  templateUrl: './yolyardim.component.html',
  styleUrls: ['./yolyardim.component.css']
})
export class YolyardimComponent implements OnInit {
  kayitlar: any;
  durum: string;
  filtre: string = "";
  usehir: string = "";
  sonuc: boolean = false;

  seckayit: Kayit = new Kayit();
  constructor(
    public Fbservice: FbserviceService,
    public Fbservis: soforServices,
    public router: Router
  ) { }
  ngOnInit(): void {

    this.KayitListele();

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
    else {
      this.seckayit.kayitTarih = tarih.getTime().toString();
      this.Fbservice.KayitDuzenle(this.seckayit).then(s => {
        this.durum = "Kayıt Güncellendi";
        this.sonuc = true;
      })
    }
  }
  KayitListele() {
    this.Fbservice.KayitListelebyUid(this.filtre, "").snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as Kayit)
      })
    });
  }



  duzenle(kayit: Kayit) {
    Object.assign(this.seckayit, kayit)

  }

}

