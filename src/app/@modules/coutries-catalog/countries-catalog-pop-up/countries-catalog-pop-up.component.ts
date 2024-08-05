import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Catalog } from 'src/app/@models/catalog';

@Component({
  selector: 'app-countries-catalog-pop-up',
  templateUrl: './countries-catalog-pop-up.component.html',
  styleUrls: ['./countries-catalog-pop-up.component.css']
})
export class CountriesCatalogPopUpComponent implements OnInit {

  public countryDetail!: Catalog;

  constructor(
    public dialogRef: MatDialogRef<CountriesCatalogPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{ 
      detail: Catalog;
    }
  ) {
    this.countryDetail = data.detail;
   }

  ngOnInit(): void {
    console.log(this.countryDetail)  
  }

}
