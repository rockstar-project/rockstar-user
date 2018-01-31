import { ViewChild, HostBinding, Component, Input, OnInit } from '@angular/core';
import { trigger, group, sequence, transition, state, style, animate, query, stagger, animateChild } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

class File {
    name: string;
    path: string;
}

class Folder {
    name: string;
    folders: Folder[] = [];
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

  nodes = [
    {
      "name": "src",
      "children": [
        {
          "name": "main",
          "children": [
            {
              "name": "java",
              "children": [
                {
                  "name": "com",
                  "children": [
                    {
                      "name": "rockstar",
                      "children": [
                        {
                          "name": "api",
                          "children": [
                            {
                              "name": "web",
                              "children": [
                                {
                                  "name": "UserController.java"
                                },
                                {
                                  "name": "UserResource.java"
                                },
                                {
                                  "name": "UserResourceAssembler.java"
                                },
                                {
                                  "name": "ErrorHandler.java"
                                }
                              ]
                            },
                            {
                              "name": "service",
                              "children": [
                                {
                                  "name": "UserService.java"
                                },
                                {
                                  "name": "UserServiceImpl.java"
                                },
                                {
                                  "name": "UserNotFoundException.java"
                                },
                                {
                                  "name": "UserNotUniqueException.java"
                                }
                              ]
                            },
                            {
                              "name": "domain",
                              "children": [
                                {
                                  "name": "User.java"
                                },
                                {
                                  "name": "Role.java"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "resources",
              "children": [
                {
                  "name": "application.yml"
                },
                {
                  "name": "bootstrap.yml"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "pom.xml"
    },
    {
      "name": "README.md"
    }
  ];
  options = {};

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
            console.log("pushing file " + file.name + " path: " + file.path);
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
