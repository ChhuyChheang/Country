import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Catalog } from 'src/app/@models/catalog';
import Fuse from 'fuse.js';
import { MatDialog } from '@angular/material/dialog';
import { CountriesCatalogService } from 'src/app/@service/countries-catalog.service';

@Component({
  selector: 'app-countries-catalog',
  templateUrl: './countries-catalog.component.html',
  styleUrls: ['./countries-catalog.component.css']
})
export class CountriesCatalogComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public countiesCatalog: Catalog[] = [];
  public searchValue: string = '';

  displayedColumns: string[] = ['no', 'png', 'official', 'cca2', 'cca3', 'nativeName', 'altSpellings', 'idd', 'action'];
  dataSource = new MatTableDataSource<Catalog>([]);

  private fuse: Fuse<Catalog>;

  constructor(
    private countriesCatalogService: CountriesCatalogService,
    public dialog: MatDialog,
  ) {
    const options = {
      keys: ['name.official'],
    };
    this.fuse = new Fuse([], options);
  }

  ngOnInit(): void {
    this.getCountriesCatalog();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getCountriesCatalog() {
    this.countriesCatalogService.list().subscribe((res) => {
      this.countiesCatalog = res;
      this.dataSource.data = this.countiesCatalog;
      this.fuse.setCollection(this.countiesCatalog);
    });
  }

  public onSearch(event: Event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    if (!this.searchValue) {
      return this.getCountriesCatalog();
    }
    const result = this.fuse.search(this.searchValue);
    this.dataSource.data = result.map(res => res.item);
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    this.searchValue = '';
    this.getCountriesCatalog();
  }


}
