import { Router } from '@angular/router';
import { Dosya } from './../../models/dosya';
import { map } from 'rxjs/operators';
import { yuklemeService } from './../../services/yuklemeService';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-kesfet',
  templateUrl: './kesfet.component.html',
  styleUrls: ['./kesfet.component.css']
})
export class KesfetComponent implements OnInit {
  kayitlar: Dosya[];
  files: FileList;
  uid: string;
  rol: string;
  constructor(
    public stServis: yuklemeService,
    public route: Router
  ) { }

  ngOnInit(): void {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.rol = user.displayName;
    this.rolKontrol();
    this.dosyaListele();
  }
  dosyaListele() {
    this.stServis.DosyaListele().snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as Dosya)
      })
    });
  }
  DosyaSec(e) {
    this.files = e.target.files;

  }
  DosyaYukle() {
    var file = this.files[0];
    var dosya = new Dosya();
    dosya.file = file;
    dosya.uid = this.uid;
    this.stServis.DosyaYukleStorage(dosya).subscribe(p => {
      console.log("Yüklendi");
    }, err => {
      console.log("baş");
    });
  }
  rolKontrol() {
    if (this.rol == "isletme") {
      this.route.navigate(['isveren/ilanpaylas']);
    }
    if (this.rol == "yolyardim") {
      this.route.navigate(['yolyardim']);
    }
  }
}
