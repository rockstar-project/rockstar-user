export class Content {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    display_order?: number;
    url?: string;
    content_links?: ContentLink[];
    contents?: Content[] = [];
}

export class ContentLink {
    title: string;
    target: string;
    method?: string;
}