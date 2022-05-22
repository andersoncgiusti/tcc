import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisioterapeutaPageRoutingModule } from './fisioterapeuta-routing.module';

import { FisioterapeutaPage } from './fisioterapeuta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisioterapeutaPageRoutingModule
  ],
  declarations: [FisioterapeutaPage]
})
export class FisioterapeutaPageModule {}
