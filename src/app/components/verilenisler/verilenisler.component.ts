import { verilenler } from './../../models/verilenler';
import { Router } from '@angular/router';
import { verilenlerService } from './../../services/verilenlerService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verilenisler',
  templateUrl: './verilenisler.component.html',
  styleUrls: ['./verilenisler.component.css']
})
export class VerilenislerComponent implements OnInit {
  kayitlar: any;
  uid: string;
  rol: string;
  rolkontrol: boolean;

  constructor(
    public Fbservis: verilenlerService,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.rolBak();
    this.KayitListele();
  }
  KayitListele() {

    this.Fbservis.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as verilenler)

      })
    });

  }
  rolBak() {
    if (this.rol == "isletme") {
      this.rolkontrol = true;
    }
    else {
      this.rolkontrol = false;
      if (this.rol == "sofor") {
        this.router.navigate(['sofor/isara']);
      }
      else {
        this.router.navigate(['yolyardim']);

      }

    }
  }

  silGitsin(key: string) {
    this.Fbservis.KayitSil(key);
  }
}
