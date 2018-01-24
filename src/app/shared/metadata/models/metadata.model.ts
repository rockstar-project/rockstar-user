export class MetadataLink {
    href: string;
}

export class MetadataLinks {
    self: MetadataLink;
}

export class Metadata {
    group: string;
    slug: string;
    title: string;
    thumbnail: string;
    description: string;
    versions: Array<string> = [];
    _links: MetadataLinks;
}

export class MetadataPageLinks {
    first: MetadataLink;
    prev: MetadataLink;
    self: MetadataLink;
    next: MetadataLink;
    last: MetadataLink;
  }
  
  export class MetadataPage {
    size: number;
    total_elements: number;
    total_pages: number;
    number: number;
  }
  
  export class MetadataList {
    metadataResourceList: Metadata[];
  }
  
  export class MetadataResultSet {
    _embedded: MetadataList;
    _links: MetadataPageLinks;
    page: MetadataPage;
  }