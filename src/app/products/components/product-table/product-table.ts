import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductImagePipe } from '../../pipes/product-image.pipe';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-table',
  imports: [ProductImagePipe, RouterLink, CurrencyPipe],
  templateUrl: './product-table.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ProductTable {

  products = input.required<Product[]>();

}
