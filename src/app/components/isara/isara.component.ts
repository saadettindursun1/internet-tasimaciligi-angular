import { ilanService } from './../../services/ilanService';
import { favoriService } from './../../services/favoriService';
import { favorilerim } from './../../models/favorilerim';
import { ilanPaylas } from './../../models/ilanPaylas';
import { uyeSofor } from 'src/app/models/uyeSofor';
import { Router } from '@angular/router';
import { soforServices } from './../../services/soforService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isara',
  templateUrl: './isara.component.html',
  styleUrls: ['./isara.component.css']
})
export class IsaraComponent implements OnInit {


  isletmeAdi: string;
  yukCins: string;
  yukAgirlik: string;
  yuklemeNoktasi: string;
  indirmeNoktasi: string;
  telNo: string;
  ucret: string;
  aracTur2: string;
  kayitTarih: string;
  firmaid: string;
  verildimi: boolean;


  uid: string;
  kayitlar: any;
  kayitlar2: any;
  rol: string;
  filtre: string;
  sofor: uyeSofor = new uyeSofor();
  seckayit: ilanPaylas = new ilanPaylas();
  favori: favorilerim = new favorilerim();
  constructor(
    public Fbservis: soforServices,
    public Fbservis2: favoriService,
    public Fbservis3: ilanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    // console.log(this.uid);
    this.KayitListele2();
    this.KayitListele3();
    this.rolBak();

  }

  OturumKapat() {
    this.Fbservis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/sofor']);
    });
  }
  KayitListele() {
    if (this.filtre != "")
      this.Fbservis.KayitListelebyUid2("Kamyon", this.filtre).snapshotChanges().subscribe(data => {
        this.kayitlar = [];
        data.forEach(satir => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as ilanPaylas)
        })
      });

  }

  rolBak() {

    if (this.rol == "isletme") {
      this.router.navigate(['isveren/ilanpaylas']);
    }
    if (this.rol == "yolyardim") {
      this.router.navigate(['yolyardim']);
    }

  }



  favoriEkle() {
    this.favori.aracTur = this.aracTur2;
    this.favori.isletmeAdi = this.isletmeAdi;
    this.favori.yukCins = this.yukCins;
    this.favori.yukAgirlik = this.yukAgirlik;
    this.favori.yuklemeNoktasi = this.yuklemeNoktasi;
    this.favori.indirmeNoktasi = this.indirmeNoktasi;
    this.favori.telNo = this.telNo;
    this.favori.ucret = this.ucret;
    this.favori.aracTur = this.aracTur2;
    this.favori.kayitTarih = this.kayitTarih;
    this.favori.firmaid = this.firmaid;
    this.favori.verildimi = this.verildimi;
    this.favori.soforid = this.uid;
    if (this.favori.key == null) {

      this.Fbservis2.KayitEkle(this.favori).then(s => {

      });
    }
  }



  KayitListele3() {
    this.Fbservis.KayitListelebyUid3(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar2 = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar2.push(y as uyeSofor)
      })
    });

  }
  KayitListele2() {
    this.Fbservis.KayitListelebyUid(this.rol).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as ilanPaylas)
      })
    });

  }

  KayitListeleHepsi() {
    this.Fbservis3.KayitListele().snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as ilanPaylas)
      })
    });

  }


}
