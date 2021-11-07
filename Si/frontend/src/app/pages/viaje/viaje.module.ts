import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajePageRoutingModule } from './viaje-routing.module';

import { ViajePage } from './viaje.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViajePage]
})
export class ViajePageModule {}
