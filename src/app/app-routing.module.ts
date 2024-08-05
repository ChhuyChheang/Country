import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesCatalogComponent } from './@modules/coutries-catalog/countries-catalog/countries-catalog.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "countries-catalog",
    pathMatch: "full",
  },
  {
    path: "",
    component: CountriesCatalogComponent,
    children: [
      {
        path: "countries-catalog", loadChildren: () => import("./@modules/coutries-catalog/coutries-catalog.module").then((m) => m.CoutriesCatalogModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
