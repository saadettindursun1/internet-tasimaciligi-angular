import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FbserviceService {
  /* kayitlar başlangıç */
  private dbKayit = '/Yolyardim';

  kayitRef: AngularFireList<Kayit> = null;
  constructor(
    public db: AngularFireDatabase
  ) {
    this.kayitRef = db.list(this.dbKayit);
  }
  KayitListele() {
    return this.kayitRef;
  }
  KayitListelebyUid(ukonum: string, yardim: string) {
    // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
    return this.db.list("Yolyardim", q => q.orderByChild("konum" && "yardim").equalTo(ukonum && yardim));
  }

  KayitListelebyUid2(gelenid: string) {
    // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
    return this.db.list("Yolyardim", q => q.orderByChild("key").equalTo(gelenid));
  }

  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);

  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }
  /* kayitlar bitiş */
}
