import { soforServices } from './../../services/soforService';
import { isverenServices } from './../../services/isverenServices';
import { uye } from './../../models/isverenuye';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isletme-admin',
  templateUrl: './isletme-admin.component.html',
  styleUrls: ['./isletme-admin.component.css']
})
export class IsletmeAdminComponent implements OnInit {

  rol: string;
  kayitlar: any;

  constructor(
    public router: Router,
    public Fbservis: isverenServices,
    public Fbservis2: soforServices
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
  kayitSil(silinen: string) {
    this.Fbservis.KayitSil(silinen);
  }
  KayitListele() {

    this.Fbservis.KayitListele().snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as uye)
      })
    });
  }

  OturumKapat() {
    this.Fbservis2.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['']);
    });
  }
}
