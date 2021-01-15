import { uyeSofor } from './../../models/uyeSofor';
import { soforKayit } from './../../models/soforKayit';
import { Router } from '@angular/router';
import { soforServices } from './../../services/soforService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soforayar',
  templateUrl: './soforayar.component.html',
  styleUrls: ['./soforayar.component.css']
})
export class SoforayarComponent implements OnInit {
  uid: string;
  rol: string;
  kayitlar: any;
  kayitlarim: uyeSofor = new uyeSofor();
  constructor(
    public Fbservis: soforServices,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.rolBak();
    this.listele();
  }
  rolBak() {

    if (this.rol == "isletme") {
      this.router.navigate(['isveren/ilanpaylas']);
    }
    if (this.rol == "yolyardim") {
      this.router.navigate(['yolyardim']);
    }

  }

  guncelle(kayitlarim) {
    this.Fbservis.KayitDuzenle(kayitlarim);
  }
  OturumKapat() {
    this.Fbservis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/sofor']);
    });
  }

  listele() {
    this.Fbservis.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as uyeSofor)
      })
    });
  }
}
