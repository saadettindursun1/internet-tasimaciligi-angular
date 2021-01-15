import { isverenKayit } from './../models/isverenKayit';

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Kayit } from '../models/kayit';

@Injectable({
    providedIn: 'root'
})
export class isverenServices {
    /* kayitlar başlangıç */
    private dbKayit = '/isverenUye';

    kayitRef: AngularFireList<isverenKayit> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    uyeOl(uye: isverenKayit) {
        return this.afAuth.createUserWithEmailAndPassword(uye.posta, uye.sifre);
    }
    UyeEkle(uye: isverenKayit) {
        return this.kayitRef.push(uye);

    }
    KayitListele2(id: string) {
        return this.db.list("isverenUye", q => q.orderByChild("uid").equalTo(id));
    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: isverenKayit) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: isverenKayit) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    /* kayitlar bitiş */
    OturumAc(mail, parola) {
        return this.afAuth.signInWithEmailAndPassword(mail, parola);
    }
    OturumKapat() {
        return this.afAuth.signOut();
    }
}
