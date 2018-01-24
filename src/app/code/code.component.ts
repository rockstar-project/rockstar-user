import { ViewChild, HostBinding, Component, Input, OnInit } from '@angular/core';
import { trigger, group, sequence, transition, state, style, animate, query, stagger, animateChild } from '@angular/animations';

class File {
    name: string;
    path: string;
}

class Folder {
    name: string;
    files: File[] = [];
}

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input()
  sourcecode: Map<string, string>;

  content: string;
  folders: Folder[] = [];


  constructor() {
  }

  ngOnInit() {
      if (this.sourcecode) {
        for (const current of  Array.from(this.sourcecode.keys())) {
            const tokens = current.split('/');
            const foldername = tokens[tokens.length - 2];
            if (this.folders.findIndex(f => f.name === foldername) === -1) {
                const folder = new Folder();
                folder.name = foldername;
                this.folders.push(folder);
            }
        }

        for (const current of  Array.from(this.sourcecode.keys())) {
            const file = new File();
            const tokens = current.split('/');
            const filename = tokens[tokens.length - 1];
            const foldername = tokens[tokens.length - 2];
            if (filename.toLowerCase().startsWith('readme')) {
                this.viewSourceCode(current);
            }
            file.name = filename;
            file.path = current;
            const folder = this.folders.find(f => f.name === foldername);
            folder.files.push(file);
        }
    }
  }

  viewSourceCode(name: string) {
    if (name && this.sourcecode) {
        this.content = this.sourcecode.get(name);
    }
  }

}

function parse(paths) {
    const parsed = {};
    for (let i = 0; i < paths.length; i++) {
        let position = parsed;
        const split = paths[i].split('/');
        for (let j = 0; j < split.length; j++) {
            if (split[j] !== '') {
                if (typeof position[split[j]] === 'undefined') {
                    position[split[j]] = {};
                }
                position = position[split[j]];
            }
        }
    }
    return parsed;
}
