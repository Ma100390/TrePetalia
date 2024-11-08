import { Routes } from '@angular/router';
import { PhomePageComponent } from './phome-page/phome-page.component';
import { PstrutturaComponent } from './pstruttura/pstruttura.component';
import { PassistenzadomiciliareComponent } from './passistenzadomiciliare/passistenzadomiciliare.component';
import { PcontattiComponent } from './pcontatti/pcontatti.component';
import { PaccompagnamentoComponent } from './paccompagnamento/paccompagnamento.component';
import { PaltriserviziComponent } from './paltriservizi/paltriservizi.component';
import { PserviziComponent } from './pservizi/pservizi.component';

export const routes: Routes = [
    {
        path: '',
        component: PhomePageComponent
      },
      {
        path: 'casa-di-riposo-provincia-di-lecce',
        component: PstrutturaComponent
      },
      {
        path: 'assistenza-domiciliare-lecce',
        component: PassistenzadomiciliareComponent
      },
      {
        path: 'accompagnamento-strutture-lecce',
        component: PaccompagnamentoComponent
      },
      {
        path: 'contatti_cooperaritiva-tre-petali',
        component: PcontattiComponent
      },
      {
        path: 'servizi',
        component: PserviziComponent
      },
      { path: 'servizio/:servizio', component: PaltriserviziComponent },
];
