import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesCatalogComponent } from './countries-catalog/countries-catalog.component';

const routes: Routes = [
  {
    path: '', component: CountriesCatalogComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoutriesCatalogRoutingModule { }
