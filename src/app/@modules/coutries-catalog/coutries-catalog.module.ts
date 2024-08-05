import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoutriesCatalogRoutingModule } from './coutries-catalog-routing.module';
import { CountriesCatalogComponent } from './countries-catalog/countries-catalog.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule} from '@angular/material/dialog';
import { CountriesCatalogPopUpComponent } from './countries-catalog-pop-up/countries-catalog-pop-up.component';
import { MatSelectModule } from '@angular/material/select';

const components = [
  CountriesCatalogComponent,
  CountriesCatalogPopUpComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    CoutriesCatalogRoutingModule,
    MatTableModule, 
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [components]
})
export class CoutriesCatalogModule { }
