import { ilanPaylas } from './../models/ilanPaylas';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class ilanService {
    /* kayitlar başlangıç */
    private dbKayit = '/ilanlar';

    kayitRef: AngularFireList<ilanPaylas> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: ilanPaylas) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: ilanPaylas) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    KayitListele2(id: string) {
        return this.db.list("ilanlar", q => q.orderByChild("firmaid").equalTo(id));
    }
    KayitListele3(id: string) {
        return this.db.list("ilanlar", q => q.orderByChild("key").equalTo(id));
    }
    KayitbyKey(key: string) {
        return this.db.object("ilanlar/" + key);
    }
    /* kayitlar bitiş */
}
