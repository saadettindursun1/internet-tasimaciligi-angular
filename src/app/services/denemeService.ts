import { denemem } from './../models/denemem';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class denemeService {
    /* kayitlar başlangıç */
    private dbKayit = '/denemem';

    kayitRef: AngularFireList<denemem> = null;
    constructor(
        public db: AngularFireDatabase
    ) {
        this.kayitRef = db.list(this.dbKayit);
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitListelebyUid(kullaniciid: string) {
        // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
        return this.db.list("denemem", q => q.orderByChild("kullaniciid").equalTo(kullaniciid));
    }
    KayitEkle(kayit: denemem) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: denemem) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    /* kayitlar bitiş */
}
