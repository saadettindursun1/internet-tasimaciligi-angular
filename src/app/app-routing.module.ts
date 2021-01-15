import { SoforAdminComponent } from './components/sofor-admin/sofor-admin.component';
import { YolyardimAdminComponent } from './components/yolyardim-admin/yolyardim-admin.component';
import { IsletmeAdminComponent } from './components/isletme-admin/isletme-admin.component';
import { IletiOkuComponent } from './components/ileti-oku/ileti-oku.component';
import { AdminComponent } from './components/admin/admin.component';
import { KesfetComponent } from './components/kesfet/kesfet.component';
import { GuncellemeComponent } from './components/guncelleme/guncelleme.component';
import { VerilenislerComponent } from './components/verilenisler/verilenisler.component';
import { SoforayarComponent } from './components/soforayar/soforayar.component';
import { FavorilerimComponent } from './components/favorilerim/favorilerim.component';
import { SoforyardimComponent } from './components/soforyardim/soforyardim.component';
import { GecmisComponent } from './components/gecmis/gecmis.component';
import { IsaraComponent } from './components/isara/isara.component';
import { IlanislemComponent } from './components/ilanislem/ilanislem.component';
import { IlanguncelleComponent } from './components/ilanguncelle/ilanguncelle.component';
import { IlanpaylasComponent } from './components/ilanpaylas/ilanpaylas.component';
import { YolyardimComponent } from './components/yolyardim/yolyardim.component';
import { SoforComponent } from './components/sofor/sofor.component';
import { IsverenComponent } from './components/isveren/isveren.component';
import { AnasayfaComponent } from './components/anasayfa/anasayfa.component';
import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes, RouterModule } from '@angular/router';

const redirectLogin = () => redirectUnauthorizedTo(['']);
const routes: Routes = [

  { path: '', component: AnasayfaComponent },
  { path: 'isveren', component: IsverenComponent },
  { path: 'sofor', component: SoforComponent },
  { path: 'yolyardim', component: YolyardimComponent },
  { path: 'admin', component: AdminComponent },

  {
    path: 'admin/iletiOku',
    component: IletiOkuComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },

  {
    path: 'admin/isletmeAdmin',
    component: IsletmeAdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },

  {
    path: 'admin/yolyardimAdmin',
    component: YolyardimAdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },

  {
    path: 'admin/soforAdmin',
    component: SoforAdminComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'isveren/ilanpaylas',
    component: IlanpaylasComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'isveren/verilenler',
    component: VerilenislerComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'isveren/ilanguncelle/:key',
    canActivate: [AngularFireAuthGuard],
    component: IlanguncelleComponent,
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'isveren/guncelle2',
    canActivate: [AngularFireAuthGuard],
    component: GuncellemeComponent,
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'isveren/ilanislem',
    canActivate: [AngularFireAuthGuard],
    component: IlanislemComponent,
    data: {
      authGuardPipe: redirectLogin
    }
  },


  {
    path: 'sofor/kesfet',
    canActivate: [AngularFireAuthGuard],
    component: KesfetComponent,
    data: {
      authGuardPipe: redirectLogin
    }
  },

  {
    path: 'sofor/favoriler',
    component: FavorilerimComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'sofor/isara',
    component: IsaraComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'sofor/ayarlar',
    component: SoforayarComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'sofor/gecmis',
    component: GecmisComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  },
  {
    path: 'sofor/soforyardim',
    component: SoforyardimComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLogin
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
