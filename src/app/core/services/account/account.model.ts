export class Billing {
    id: string;
    billing_date: Date;
    amount: number;
    currency: string;
}

export class Subscription {
    id: string;
    plan: string;
}

export class PaymentTransaction {
    reference_number: string;
    date: string;
    method: string;
    amount: string;
    currency: string;
    receipt: string;
}

export class PaymentInfo {
    id: string;
    card_type: string;
    display_label: string;
    provider_ref: string;
}

export class Account {
    id: string;
    username: string;
    subscription: Subscription;
    billing: Billing;
    payment_info: PaymentInfo;
}

export class PaymentMethod {
    cardnumber: string;
    expireDate: string;
    cvc: string;
}