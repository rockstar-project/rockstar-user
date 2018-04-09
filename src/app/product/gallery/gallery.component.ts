import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { ProductService, Product, Media } from '../../core';

@Component({
  selector: 'app-develop-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  product: Product;
  id: string;

  constructor(private route: ActivatedRoute,  private productService: ProductService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.parent.params['id'];
    this.getProduct();
  } 

  getProduct() {
      this.productService.getProduct(this.id)
          .subscribe( result => this.product = result
        );
  }
}