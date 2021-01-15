
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { IsverenComponent } from './components/isveren/isveren.component';
import { SoforComponent } from './components/sofor/sofor.component';
import { YolyardimComponent } from './components/yolyardim/yolyardim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IlanpaylasComponent } from './components/ilanpaylas/ilanpaylas.component';
import { IlanguncelleComponent } from './components/ilanguncelle/ilanguncelle.component';
import { IlanislemComponent } from './components/ilanislem/ilanislem.component';
import { IsaraComponent } from './components/isara/isara.component';
import { GecmisComponent } from './components/gecmis/gecmis.component';
import { SoforyardimComponent } from './components/soforyardim/soforyardim.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { Yolyardim2Component } from './components/yolyardim2/yolyardim2.component';
import { KayitEkleComponent } from './components/kayit-ekle/kayit-ekle.component';
import { FavorilerimComponent } from './components/favorilerim/favorilerim.component';
import { SoforayarComponent } from './components/soforayar/soforayar.component';
import { VerilenislerComponent } from './components/verilenisler/verilenisler.component';
import { GuncellemeComponent } from './components/guncelleme/guncelleme.component';
import { KesfetComponent } from './components/kesfet/kesfet.component';
import { AdminComponent } from './components/admin/admin.component';
import { IletiOkuComponent } from './components/ileti-oku/ileti-oku.component';
import { IsletmeAdminComponent } from './components/isletme-admin/isletme-admin.component';
import { YolyardimAdminComponent } from './components/yolyardim-admin/yolyardim-admin.component';
import { SoforAdminComponent } from './components/sofor-admin/sofor-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    IsverenComponent,
    SoforComponent,
    YolyardimComponent,
    IlanpaylasComponent,
    IlanguncelleComponent,
    IlanislemComponent,
    IsaraComponent,
    GecmisComponent,
    SoforyardimComponent,
    Yolyardim2Component,
    KayitEkleComponent,
    FavorilerimComponent,
    SoforayarComponent,
    VerilenislerComponent,
    GuncellemeComponent,
    KesfetComponent,
    AdminComponent,
    IletiOkuComponent,
    IsletmeAdminComponent,
    YolyardimAdminComponent,
    SoforAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
