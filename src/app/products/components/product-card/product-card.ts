import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ProductCard {
  product = input.required<Product>();

  imageUrl = computed(() => {
    return `http://localhost:3000/api/files/product/${this.product().images[0]}`;
  })
}
