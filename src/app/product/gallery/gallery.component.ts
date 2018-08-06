import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService, UtilsService, Product, Media } from '../../core';

@Component({
  selector: 'app-develop-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  product: Product;
  id: string;

  activeIds: string[] = [];

  constructor(private route: ActivatedRoute,  private productService: ProductService, private utilsService: UtilsService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.parent.params['id'];
    this.getProduct();
    this.activeIds.push('panel-' + 'restapi');
  } 

  getProduct() {
      
      this.productService.getProduct(this.id)
          .subscribe( result => {
            let mediaItems = this.utilsService.sortOrder(result.media_items);
            this.product = result;
            this.product.media_items = mediaItems;
            //this.activeIds = this.product.media_items.map(i => 'panel-' + i.slug);
          }
        );
    }


}