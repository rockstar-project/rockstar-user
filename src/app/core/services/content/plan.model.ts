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
    public currency_symbol: string;
    public amount: number;
    public unit_of_measure: string;
    public uom_quantity: number;
    public features: Feature[];
    public description?: string;
  }
  
  export class Plans {
    public title: string;
    public description: string;
    public items: PlanItem[];
  }
  