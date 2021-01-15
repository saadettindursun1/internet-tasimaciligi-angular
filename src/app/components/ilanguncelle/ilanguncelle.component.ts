import { ActivatedRoute, Router } from '@angular/router';
import { ilanService } from './../../services/ilanService';
import { Component, OnInit } from '@angular/core';
import { ilanPaylas } from 'src/app/models/ilanPaylas';

@Component({
  selector: 'app-ilanguncelle',
  templateUrl: './ilanguncelle.component.html',
  styleUrls: ['./ilanguncelle.component.css']
})
export class IlanguncelleComponent implements OnInit {


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
  verildimi: boolean;

  key: string;

  uid: string;
  rol: string;
  seckayit: ilanPaylas = new ilanPaylas();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public fbservis: ilanService

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.key = p.key;

      var user: any = JSON.parse(localStorage.getItem("user"));
      this.uid = user.uid;
      this.rol = user.displayName;
      this.rolKontrol();
      this.KayitListele();


    });



  }

  KayitListele() {

    this.fbservis.KayitbyKey(this.key).snapshotChanges().subscribe(d => {
      var u = { ...(d.payload.toJSON() as ilanPaylas), key: this.key };
      this.seckayit = u;

      this.isletmeAdi = this.seckayit.isletmeAdi;
      this.indirmeNoktasi = this.seckayit.indirmeNoktasi;
      this.yuklemeNoktasi = this.seckayit.yuklemeNoktasi;
      this.yukCins = this.seckayit.yukCins;
      this.yukAgirlik = this.seckayit.yukAgirlik;
      this.ucret = this.seckayit.ucret;
      this.firmaid = this.seckayit.firmaid;
      this.kayitTarih = this.seckayit.kayitTarih;
      this.telNo = this.seckayit.telNo;
      this.verildimi = this.seckayit.verildimi;
      this.aracTur = this.seckayit.aracTur;
    });
  }
  rolKontrol() {
    if (this.rol != "isletme") {
      this.router.navigate(['']);
    }
  }
}
