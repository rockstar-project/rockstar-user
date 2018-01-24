export class ProductLink {
    href: string;
}

export class ProductLinks {
    self: ProductLink;
    attributes: ProductLink;
    options: ProductLink;
}

export class Option {
  name: string;
  value: string;
  title: string;
  image: string;
  version: string;
  tags: string[] = [];
}

export class Attribute {
  name: string;
  value: string;
  title: string;
  image: string;
  version: string;
}

export class ProductDetails {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featured: boolean;
  author: string;
  version: string;
  state: string;
  price: string;
  visibility: string;
  organization: string;
  attributes: Array<Attribute> = [];
  options: Array<Option> = [];
  _links: ProductLinks;

  public getAttribute(name: string) : Attribute {
    if (name && name.length > 0) {
      for (let currentAttribute of this.attributes) {
        if (name === currentAttribute.name) {
          return currentAttribute;
        }
      }
    }
    return null;
  }

  public getOption(name: string) : Option {
    if (name && name.length > 0) {
      for (let currentOption of this.options) {
        if (name === currentOption.name) {
          return currentOption;
        }
      }
    }
    return null;
  }
}

export class ProductInfo {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  attributes: Array<Attribute>;
  _links: ProductLinks;
}

export class ProductPageLinks {
  first: ProductLink;
  prev: ProductLink;
  self: ProductLink;
  next: ProductLink;
  last: ProductLink;
}

export class ProductPage {
  size: number;
  total_elements: number;
  total_pages: number;
  number: number;
}

export class ProductInfoList {
  productInfoResourcerList: ProductInfo[];
}

export class ProductSearchResult {
  _embedded: ProductInfoList;
  _links: ProductPageLinks;
  page: ProductPage;
}

export class ProductSearchCriteria {
  keyword: string;
  organization: string;
  state: string;
  price: string;
  featured: boolean;
  architecture: string;
  language: string;
  framework: string;
  page: number = 0;
  size: number = 50;
}