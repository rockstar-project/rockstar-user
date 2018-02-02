import { ViewChild, HostBinding, Component, Input, OnInit } from '@angular/core';
import { trigger, group, sequence, transition, state, style, animate, query, stagger, animateChild } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Folder, File } from '../shared';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input()
  sourcecode: Map<string, string>;

  selectedfile: File;
  files: File[] = [];
  folders: Folder[] = [];
  options:any = { 
      showGutter: false,
      showPrintMargin: false,
      highlightActiveLine: false
  };

  constructor() {
  }

  ngOnInit() {
      let tokens: Array<string>;

      if (this.sourcecode) {
        for (const current of  Array.from(this.sourcecode.keys())) {
            if (current.indexOf('/') > 0) { 
                tokens = current.split('/');
                if (tokens && tokens.length > 0) {
                    const foldername = tokens[tokens.length - 2];
                    if (this.folders.findIndex(f => f.name === foldername) === -1) {
                        const folder = new Folder();
                        folder.name = foldername;
                        this.folders.push(folder);
                    }
                } 
            } else {
                console.log(current);
                let fileext: string;
                tokens = current.split('.');
                if (tokens && tokens.length > 0) {
                    fileext = tokens[1];
                }
                const file = new File();
                file.name = current;
                file.path = current;
                file.ext = toAceFileExt(fileext);
                file.content = this.sourcecode.get(current);
                this.files.push(file);
            }
        }

        for (const current of  Array.from(this.sourcecode.keys())) {
            if (current.indexOf('/') > 0) { 
                const file = new File();
                let fileext = null;
                let tokens = current.split('/');
                const filename = tokens[tokens.length - 1];
                const foldername = tokens[tokens.length - 2];
                
                tokens = current.split('.');

                if (tokens && tokens.length > 0) {
                    fileext = tokens[1];
                }
                
                file.name = filename;
                file.path = current;
                file.ext = toAceFileExt(fileext);
                file.content = this.sourcecode.get(current);
                const folder = this.folders.find(f => f.name === foldername);
                
                folder.files.push(file);
            }
            
        }

        this.onSelectFile(null, 'README.md');
    
    }
  }

  onSelectFile(foldername: string, filename: string) {
    let folder: Folder;
    let file: File;
    if (foldername) {
        if (filename) {
            folder = this.folders.find(f => f.name === foldername);
            this.selectedfile = folder.files.find(fi => fi.name == filename ); 
        }
    } else {
        if (filename) {
            this.selectedfile = this.files.find(fi => fi.name == filename);
        }
    }
  }

}

function toAceFileExt(value: string) : string{
    let aceFileExt: string = null;
    if (value) {
        switch (value) {
            case 'md': 
                aceFileExt = 'markdown';
                break;
            case 'yml': 
                aceFileExt = 'yaml';
                break;
            default:
                aceFileExt = value;
                break;
        }
    }
    return aceFileExt;
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

