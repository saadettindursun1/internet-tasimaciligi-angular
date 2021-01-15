import { verilenler } from './../../models/verilenler';
import { verilenlerService } from './../../services/verilenlerService';
import { ilanPaylas } from './../../models/ilanPaylas';
import { ilanService } from './../../services/ilanService';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilanislem',
  templateUrl: './ilanislem.component.html',
  styleUrls: ['./ilanislem.component.css']
})
export class IlanislemComponent implements OnInit {
  uid: string;
  kayitlar: any;
  bilgi: string;
  bilgi2: string;
  bilgi3: string;
  duzen: boolean = false;

  isletmeAdi: string;
  yukCins: string;
  yukAgirlik: string;
  yuklemeNoktasi: string;
  indirmeNoktasi: string;
  telNo: string;
  ucret: string;
  aracTur: string;
  kayitTarih: string;
  firmaid: string;
  soformail: string;
  soforTel: string;
  verilisTarih: string;
  silinen: string;
  rol: string;
  verdik: verilenler = new verilenler();

  ilanlar: ilanPaylas = new ilanPaylas();
  constructor(
    public Fbservis: ilanService,
    public Fbservis2: verilenlerService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.KayitListele();
    this.rolKontrol();
  }
  KayitListele() {

    this.Fbservis.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as ilanPaylas)
      })
    });

  }
  rolKontrol() {
    if (this.rol != "isletme") {
      this.router.navigate(['']);
    }
  }
  verildi() {
    this.verdik.isletmeAdi = this.isletmeAdi;
    this.verdik.yukCins = this.yukCins;
    this.verdik.yukAgirlik = this.yukAgirlik;
    this.verdik.yuklemeNoktasi = this.yuklemeNoktasi;
    this.verdik.indirmeNoktasi = this.indirmeNoktasi;
    this.verdik.telNo = this.telNo;
    this.verdik.ucret = this.ucret;
    this.verdik.aracTur = this.aracTur;
    this.verdik.kayitTarih = this.kayitTarih;
    this.verdik.firmaid = this.firmaid;
    this.verdik.soformail = this.soformail;
    this.verdik.soforTel = this.soforTel;

    var tarih = new Date();
    if (this.verdik.key == null) {
      this.verdik.verilisTarih = tarih.getTime().toString();
      this.Fbservis2.KayitEkle(this.verdik).then(s => {
        this.duzen = false;
        this.verileniSil();
      });
    }
  }


  verileniSil() {
    this.Fbservis.KayitSil(this.silinen);
  }
}