import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfisPage } from './perfis.page';

const routes: Routes = [
  {
    path: '',
    component: PerfisPage
  },
  {
    path: 'paciente',
    loadChildren: () => import('./paciente/paciente.module').then( m => m.PacientePageModule)
  },
  {
    path: 'fisioterapeuta',
    loadChildren: () => import('./fisioterapeuta/fisioterapeuta.module').then( m => m.FisioterapeutaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfisPageRoutingModule {}
