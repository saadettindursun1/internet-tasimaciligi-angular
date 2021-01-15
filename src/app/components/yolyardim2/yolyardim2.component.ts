import { Kayit } from './../../models/kayit';
import { FbserviceService } from './../../services/fbservice.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-soforyardim',
  templateUrl: './yolyardim2.component.html',
  styleUrls: ['./yolyardim2.component.css']
})
export class Yolyardim2Component implements OnInit {

  kayitlar: any;
  seckayit: Kayit = new Kayit();
  duzenleDurum: boolean = false;
  secili: string;
  constructor(
    public Fbservice: FbserviceService
  ) { }
  KayitListele() {
    this.Fbservice.KayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kayitlar = data;
    });
  }


  ngOnInit(): void {
    this.KayitListele();
    this.seckayit.key = null;
  }
  duzenle(kayit: Kayit) {
    Object.assign(this.seckayit, kayit)
    this.duzenleDurum = true;
  }
}
