import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisioterapeutaPage } from './fisioterapeuta.page';

const routes: Routes = [
  {
    path: '',
    component: FisioterapeutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisioterapeutaPageRoutingModule {}
