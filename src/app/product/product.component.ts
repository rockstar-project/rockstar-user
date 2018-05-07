import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product, fadeInAnimation } from '../core';
import { Option } from '../core'
import { UtilsService } from '../core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProductComponent implements OnInit, OnDestroy {

    sub: any;
    id: string;
    product: Product;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.sub = this.route.params.subscribe(params => {
            this.product = this.route.snapshot.data['product'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }    

    onExit() {
        this.location.back();
    }

    showOptions() {
        this.router.navigate([{outlets : {sidebar: 'options'}}], { relativeTo: this.route });
        //this.router.navigateByUrl('/product/' + this.id + '/(sidebar:options)');
    }

    showSpec() {
        this.router.navigate([{outlets : {sidebar: 'spec'}}], { relativeTo: this.route });
        //this.router.navigateByUrl('/product/' + this.id + '/(sidebar:spec)');
    }

    showOverview() {
        this.router.navigate([{outlets : {sidebar: 'overview'}}], { relativeTo: this.route });
        //this.router.navigateByUrl('/product/' + this.id + '/overview');
    }

    showCI() {
        this.router.navigate([{outlets : {sidebar: 'architecture'}}], { relativeTo: this.route });
        //this.router.navigateByUrl('/product/' + this.id + '/ci');
    }

    showCode() {
        this.router.navigate(['code'], { relativeTo: this.route });
        //this.router.navigateByUrl('/product/' + this.id + '/code');
    }

}
