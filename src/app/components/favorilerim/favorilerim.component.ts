import { Router } from '@angular/router';
import { favoriService } from './../../services/favoriService';
import { soforServices } from './../../services/soforService';
import { favorilerim } from './../../models/favorilerim';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-favorilerim',
  templateUrl: './favorilerim.component.html',
  styleUrls: ['./favorilerim.component.css']
})
export class FavorilerimComponent implements OnInit {

  uid: string;
  kayitlar: any;
  kayitlar2: any;
  rol: string;
  aracTur: string;
  filtre: string;
  favori: favorilerim = new favorilerim();
  constructor(
    public Fbservis: soforServices,
    public Fbservis2: favoriService,
    public router: Router
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.rolBak();
    this.KayitListele();
    // console.log(this.uid);


  }

  rolBak() {

    if (this.rol == "isletme") {
      this.router.navigate(['isveren/ilanpaylas']);
    }
    if (this.rol == "yolyardim") {
      this.router.navigate(['yolyardim']);
    }

  }
  OturumKapat() {
    this.Fbservis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/sofor']);
    });
  }
  KayitListele() {
    if (this.filtre != "")
      this.Fbservis2.KayitListelebyUid2(this.uid).snapshotChanges().subscribe(data => {
        this.kayitlar = [];
        data.forEach(satir => {
          var y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as favorilerim)
        })
      });

  }


  silme(key: string) {
    this.Fbservis2.KayitSil(key);
  }


}
