import { Component, OnInit, Input} from '@angular/core';
import { ProductService, Product, Option, Attribute, AttributePipe, GroupOptions, MicroserviceService, Capability} from '../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  groupOptions: GroupOptions[];

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private microserviceService: MicroserviceService,
    private attributePipe: AttributePipe) {}

  ngOnInit() {
    this.getGroupOptions(this.route.snapshot.parent.params['id']);
  }

  getGroupOptions(id: string) {
    let capabilities: Array<Capability> = null;
    let product: Product;
    let options: Option[];
    let currentGroupOption: GroupOptions;
    let architecture: string;

    this.productService.getProduct(id)
        .subscribe( product => {
            if (product) {
              
              architecture = this.attributePipe.transform(product.attributes, 'architecture', 'value');
              this.microserviceService.getCapabilities()
                  .subscribe( capabilities => {
                    this.groupOptions = new Array<GroupOptions> ();
                    
                    for (let current of capabilities) {
                      currentGroupOption = new GroupOptions();
                      currentGroupOption.name = current.slug;
                      currentGroupOption.title = current.title;
                      currentGroupOption.options = this.getMatchingOptions(product.options, current.slug);
                      this.groupOptions.push(currentGroupOption);
                    }
                }
              );
            }
        });
  }

  private getMatchingOptions(alloptions: Option[], group: string) {
      const matchingOptions = new Array<Option>();

      if (alloptions && alloptions.length > 0) {
        for (let currentOption of alloptions) {
            const optiontags = currentOption.tags;
            if (optiontags && optiontags.length > 0) {
                if (optiontags.indexOf(group) > - 1) {
                    matchingOptions.push(currentOption);
                }
            }
        }
      }
      return matchingOptions;
  }

}