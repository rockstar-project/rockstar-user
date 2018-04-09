export class Content {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    display_order?: number;
    url?: string;
    enable?: boolean;
    tags?: string[] = [];
    links?: Reference[] = [];
    contents?: Content[] = [];
}

export class Reference {
    name: string;
    content: Content;
    default: boolean = false;
    display_order?: number;
}