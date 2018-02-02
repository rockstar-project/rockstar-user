export class Folder {
    name: string;
    files: File[] = [];
}

export class File {
    name: string;
    path: string;
    ext: string;
    content: string;
}