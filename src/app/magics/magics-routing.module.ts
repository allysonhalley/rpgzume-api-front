import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MagicListComponent} from "./magic-list/magic-list.component";

const routes: Routes = [
  { path: '', component: MagicListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagicsRoutingModule {}
