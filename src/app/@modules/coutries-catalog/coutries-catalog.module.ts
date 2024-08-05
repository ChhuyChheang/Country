import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoutriesCatalogRoutingModule } from './coutries-catalog-routing.module';
import { CountriesCatalogComponent } from './countries-catalog/countries-catalog.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    CountriesCatalogComponent,
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
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule, MatInputModule, FormsModule
  ]
})
export class CoutriesCatalogModule { }
