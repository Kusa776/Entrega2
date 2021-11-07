import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfiinPageRoutingModule } from './perfiin-routing.module';

import { PerfiinPage } from './perfiin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfiinPageRoutingModule
  ],
  declarations: [PerfiinPage]
})
export class PerfiinPageModule {}
