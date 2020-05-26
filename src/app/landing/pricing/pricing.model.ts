export class Price {
  public currency_symbol: string;
  public amount: number;
}

export class Consumption {
  public unit: string;
  public quantity: number;
}

export class Feature {
    public id: string;
    public title: string;
    public subtitle?: string;
    public icon?: string;
    public enable?: boolean;
  }
  
  export class PlanItem {
    public name: string;
    public title: string;
    public price: Price;
    public consumption: Consumption;
    public features: Feature[];
    public description?: string;
  }
  
  export class Plans {
    public title: string;
    public description: string;
    public items: PlanItem[];
  }
  