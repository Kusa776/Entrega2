import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiinPage } from './perfiin.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiinPageRoutingModule {}
