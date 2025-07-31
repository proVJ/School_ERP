import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/priduct-service';
import { Product } from '../../../domain/Product';
import { TableModule } from 'primeng/table';
//import { PrimeNgImportsModule } from './imports/primeng_import/primeng_Import';

@Component({
  selector: 'app-prime-ng-table',
  templateUrl: './prime-ng-table.component.html',
  styleUrls: ['./prime-ng-table.component.css'],
  imports: [TableModule],
  providers: [ProductService],
  standalone:true
})
export class PrimeNgTableComponent implements OnInit {
  products!: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
  });
  }

}
