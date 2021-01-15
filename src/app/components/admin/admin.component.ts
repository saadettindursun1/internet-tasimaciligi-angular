import { Router } from '@angular/router';
import { soforServices } from './../../services/soforService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  sonuc: boolean;
  durum: string;

  constructor(
    public Fbservis: soforServices,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  GirisYap(mail: string, parola: string) {
    this.Fbservis.OturumAc(mail, parola).then(d => {
      this.sonuc = true;
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/admin/iletiOku']);
    }, err => {
      this.durum = "Giriş Başarısız";
      this.sonuc = false;
    });
  }
}
