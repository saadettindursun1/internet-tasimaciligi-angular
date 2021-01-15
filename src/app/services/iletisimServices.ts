import { iletisim } from './../models/iletisim';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class iletisimServices {
    /* kayitlar başlangıç */
    private dbKayit = '/iletisim';

    kayitRef: AngularFireList<iletisim> = null;
    constructor(
        public db: AngularFireDatabase
    ) {
        this.kayitRef = db.list(this.dbKayit);
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: iletisim) {
        return this.kayitRef.push(kayit);

    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    /* kayitlar bitiş */
}
