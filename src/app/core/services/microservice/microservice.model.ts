export class MicroserviceFeature {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
    versions: Array<string> = [];
  }

  export class Framework {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
    versions: Array<string> = [];
  }

  export class Runtime {
    slug: string;
    title: string;
    stack: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
    versions: Array<string> = [];
    frameworks: Array<Framework> = [];
    state: string = 'inactive';
  }

  export class Schema {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
    versions: Array<string> = [];
    sample_url: string;
    format: string;
  }

  export class Pattern {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
  }

  export class Tool {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
  }

  export class Choice {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
  }

  export class Capability {
    slug: string;
    parent: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
    color: string;
    subcapabilities: Array<Capability> = [];
    options: Choice[];
  }

  export class CapabilityItem {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
  }

  export class Architecture {
    slug: string;
    title: string;
    thumbnail: string;
    display_order: number;
    enabled: boolean;
    description: string;
    color: string;
    patterns: Array<Pattern> = [];
  }