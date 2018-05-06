import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import { ProductService, Product, Option, Attribute, AttributePipe, GroupOptions, MicroserviceService, Capability, UtilsService} from '../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit, OnDestroy {

  groupOptions: GroupOptions[];
  sub: any;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private microserviceService: MicroserviceService,
    private utilsService: UtilsService,
    private attributePipe: AttributePipe) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let product = this.route.snapshot.parent.data['product'];
      let resultset = this.route.snapshot.data['options'];
      this.getGroupOptions(product, resultset);
    });
    
  }

  ngOnDestroy() {
    if (this.sub) {
        this.sub.unsubscribe();
    }
}   

  getGroupOptions(product, resultset) {
    let capabilities: Array<Capability> = null;
    let options: Option[];
    let option: Option;
    let currentGroupOption: GroupOptions;
    
    if (product && resultset) {
      this.groupOptions = new Array<GroupOptions> ();
            
      for (let current of resultset[0]) {
        currentGroupOption = new GroupOptions();
        currentGroupOption.name = current.slug;
        currentGroupOption.title = current.title;
        currentGroupOption.thumbnail = current.thumbnail;
        currentGroupOption.options = new Array<Option>();

        if (current.slug === 'core') {
          capabilities = resultset[1].subcapabilities
        } else if (current.slug === 'supporting') {
          capabilities = resultset[2].subcapabilities
        } else if (current.slug === 'infrastructure') {
          capabilities = resultset[3].subcapabilities
        } else if (current.slug === 'process_governance') {
          capabilities = resultset[4].subcapabilities
        }

        for (let currentCapability of capabilities) {
          let productOption = this.getMatchingOption(product.options, currentCapability.slug)
          if (productOption) {
            option = new Option();
            option.name = productOption.name;
            option.title = currentCapability.title;
            option.value = productOption.title;
            option.image = productOption.image;
            option.version = productOption.version;
            currentGroupOption.options.push(option);
          }
        }
        
        this.groupOptions.push(currentGroupOption);
      }
    }
  }

  private getMatchingOption(productOptions: Option[], capability: string) {
      let matchedOption;
      if (productOptions && productOptions.length > 0) {
        for (let currentOption of productOptions) {
            if (currentOption.name === capability) {
              matchedOption = currentOption;
              break;
            }
              
        }
      }
      return matchedOption;
  }

}