import { verilenler } from './../../models/verilenler';
import { verilenlerService } from './../../services/verilenlerService';
import { soforServices } from './../../services/soforService';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gecmis',
  templateUrl: './gecmis.component.html',
  styleUrls: ['./gecmis.component.css']
})
export class GecmisComponent implements OnInit {

  constructor(
    public router: Router,
    public Fbservis: soforServices,
    public fbServis: verilenlerService
  ) { }
  rol: string;
  uid: string;
  kayitlar: any;
  mail: string;
  toplam: number = 0;

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.mail = user.email;
    this.rolBak();
    this.listele();
  }

  OturumKapat() {
    this.Fbservis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/sofor']);
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

  listele() {
    this.fbServis.KayitListele3(this.mail).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as verilenler)
      })
    });

  }
  toplama(deger: string) {
    this.toplam = this.toplam + parseInt(deger);
  }
}
