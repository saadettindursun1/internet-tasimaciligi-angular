import { Dosya } from './../models/dosya';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class yuklemeService {

    private basePath = "/Dosyalar";

    constructor(
        public db: AngularFireDatabase,
        public storage: AngularFireStorage
    ) { }

    DosyaYukleStorage(dosya: Dosya) {

        const dosyaYol = this.basePath + "/" + dosya.file.name;
        const storageRef = this.storage.ref(dosyaYol);
        const yukleTask = this.storage.upload(dosyaYol, dosya.file);
        yukleTask.snapshotChanges().pipe(

            finalize(() => {
                storageRef.getDownloadURL().subscribe(downloadUrl => {
                    dosya.url = downloadUrl;
                    dosya.adi = dosya.file.name;
                    this.DosyaVerileriKaydet(dosya);
                })
            })
        ).subscribe();

        return yukleTask.percentageChanges();

    }

    DosyaVerileriKaydet(dosya: Dosya) {
        this.db.list(this.basePath).push(dosya);

    }
    DosyaListele() {
        return this.db.list(this.basePath);
    }
}
