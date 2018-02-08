export class Folder {
    name: string;
    files: File[] = new Array<File>();
}

export class File {
    name: string;
    path: string;
    ext: string;
    content: string;
}