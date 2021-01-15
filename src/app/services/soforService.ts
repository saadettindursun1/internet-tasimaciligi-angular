import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { uyeSofor } from './../models/uyeSofor';
import { soforKayit } from './../models/soforKayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class soforServices {
    /* kayitlar başlangıç */
    private dbKayit = '/soforKayit';
    private dbUye = '/soforUye';



    kayitRef: AngularFireList<soforKayit> = null;
    uyeRef: AngularFireList<uyeSofor> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth,
        public router: Router
    ) {
        this.kayitRef = db.list(this.dbKayit);
        this.uyeRef = db.list(this.dbUye);
    }


    OturumAc(mail, parola) {
        return this.afAuth.signInWithEmailAndPassword(mail, parola);
    }
    OturumKapat() {
        return this.afAuth.signOut();
    }
    uyeOl(uye: uyeSofor) {
        return this.afAuth.createUserWithEmailAndPassword(uye.posta, uye.sifre);
    }
    UyeEkle(uye: uyeSofor) {
        return this.uyeRef.push(uye);

    }

    OturumKontrol() {
        if (localStorage.getItem("user")) {
            return true;

        }
        else {
            return false;
        }
    }
    KayitListele() {
        return this.uyeRef;
    }
    KayitListele2(id: string) {
        return this.db.list("soforUye", q => q.orderByChild("uid").equalTo(id));
    }
    KayitEkle(kayit: soforKayit) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: soforKayit) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.uyeRef.remove(key);
    }
    /* kayitlar bitiş */
    KayitListelebyUid(uid: string) {
        // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
        return this.db.list("ilanlar", q => q.orderByChild("aracTur").equalTo(uid));
    }
    KayitListelebyUid2(uid: string, konum: string) {
        // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
        return this.db.list("ilanlar", q => q.orderByChild("aracTur" && "yuklemeNoktasi").equalTo(uid && konum));
    }
    KayitListelebyUid3(uid3: string) {
        // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
        return this.db.list("soforUye", q => q.orderByChild("uid").equalTo(uid3));
    }
}
