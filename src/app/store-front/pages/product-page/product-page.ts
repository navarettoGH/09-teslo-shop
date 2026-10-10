import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarousel } from '../../../products/components/product-carousel/product-carousel';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarousel],
  templateUrl: './product-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ProductPage {

  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  productIdSlug: string = this.activatedRoute.snapshot.params['idSlug'];

  producResource = rxResource({
    params: () => ({idSlug: this.productIdSlug}),
    stream: ({params}) =>  this.productService.getProductByIdSlug(params.idSlug),
  });
}
