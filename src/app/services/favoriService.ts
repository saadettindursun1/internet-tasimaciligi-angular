import { favorilerim } from './../models/favorilerim';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class favoriService {
    /* kayitlar başlangıç */
    private dbKayit = '/favoriler';

    kayitRef: AngularFireList<favorilerim> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: favorilerim) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: favorilerim) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    KayitListelebyUid2(soforid: string) {
        return this.db.list("favoriler", q => q.orderByChild("soforid").equalTo(soforid));
    }
    /* kayitlar bitiş */
}
