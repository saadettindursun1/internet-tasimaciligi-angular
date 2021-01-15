import { verilenler } from './../models/verilenler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class verilenlerService {
    /* kayitlar başlangıç */
    private dbKayit = '/verilenler';

    kayitRef: AngularFireList<verilenler> = null;
    constructor(
        public db: AngularFireDatabase,
        public afAuth: AngularFireAuth
    ) {
        this.kayitRef = db.list(this.dbKayit);

    }
    KayitListele() {
        return this.kayitRef;
    }
    KayitEkle(kayit: verilenler) {
        return this.kayitRef.push(kayit);

    }
    KayitDuzenle(kayit: verilenler) {
        return this.kayitRef.update(kayit.key, kayit);
    }
    KayitSil(key: string) {
        return this.kayitRef.remove(key);
    }
    KayitListele2(id: string) {
        return this.db.list("verilenler", q => q.orderByChild("firmaid").equalTo(id));
    }
    KayitListele3(mail: string) {
        return this.db.list("verilenler", q => q.orderByChild("soformail").equalTo(mail));
    }
    /* kayitlar bitiş */
}
