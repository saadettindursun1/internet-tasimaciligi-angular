import { soforServices } from './../../services/soforService';
import { uyeSofor } from './../../models/uyeSofor';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sofor-admin',
  templateUrl: './sofor-admin.component.html',
  styleUrls: ['./sofor-admin.component.css']
})
export class SoforAdminComponent implements OnInit {

  rol: string;
  kayitlar: any;

  constructor(
    public router: Router,
    public Fbservis: soforServices,
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
        this.kayitlar.push(y as uyeSofor)
      })
    });
  }

  OturumKapat() {
    this.Fbservis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['']);
    });
  }
}
