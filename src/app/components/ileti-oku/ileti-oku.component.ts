import { isverenServices } from './../../services/isverenServices';
import { soforServices } from './../../services/soforService';
import { iletisim } from './../../models/iletisim';
import { iletisimServices } from './../../services/iletisimServices';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ileti-oku',
  templateUrl: './ileti-oku.component.html',
  styleUrls: ['./ileti-oku.component.css']
})
export class IletiOkuComponent implements OnInit {

  rol: string;
  kayitlar: any;

  constructor(
    public router: Router,
    public Fbservis: iletisimServices,
    public Fbservis2: isverenServices
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.rol = user.email;
    this.rolKontrol();
    this.KayitListele();
  }

  rolKontrol() {
    if (this.rol != "saadettin.dursun1@gmail.com") {
      this.router.navigate(['']);
    }
  }

  KayitListele() {

    this.Fbservis.KayitListele().snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as iletisim)
      })
    });

  }
  iletiSil(silinen: string) {
    this.Fbservis.KayitSil(silinen);
  }

  OturumKapat() {
    this.Fbservis2.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['']);
    });
  }



}
