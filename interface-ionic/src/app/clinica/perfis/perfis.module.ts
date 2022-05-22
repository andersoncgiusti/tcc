import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfisPageRoutingModule } from './perfis-routing.module';

import { PerfisPage } from './perfis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfisPageRoutingModule
  ],
  declarations: [PerfisPage]
})
export class PerfisPageModule {}
