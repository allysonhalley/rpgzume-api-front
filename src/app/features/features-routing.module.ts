import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureListComponent} from "./feature-list/feature-list.component";

const routes: Routes = [
  { path: '', component: FeatureListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
