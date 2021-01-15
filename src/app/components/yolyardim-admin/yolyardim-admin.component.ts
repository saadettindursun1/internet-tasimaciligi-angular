import { Kayit } from './../../models/kayit';
import { FbserviceService } from './../../services/fbservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yolyardim-admin',
  templateUrl: './yolyardim-admin.component.html',
  styleUrls: ['./yolyardim-admin.component.css']
})
export class YolyardimAdminComponent implements OnInit {

  rol: string;
  kayitlar: any;

  constructor(
    public router: Router,
    public Fbservis: FbserviceService
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
        this.kayitlar.push(y as Kayit)
      })
    });
  }
}
