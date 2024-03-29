import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as editor from 'jsoneditor';
import { ArtifactService } from '../../services/artifact';
import { SchemaService } from '../../services/schema/schema.service';

@Component({
  selector: 'app-jsoneditor',
  templateUrl: './jsoneditor.component.html',
  styleUrls: ['./jsoneditor.component.scss'],
})

export class JsonEditorComponent implements OnInit {
  private editor: any;
  private optionsDiffer: any;
  private dataDiffer: any;

  @Input() options: JsonEditorOptions = new JsonEditorOptions();
  data: Object;
  @Input() schemaUrl;

  constructor(private rootElement: ElementRef, private schemaService: SchemaService) { }

  ngOnInit() {
    this.schemaService.getSchema(this.schemaUrl)
          .subscribe(result => {
              this.data = result;
              this.editor = new editor(this.rootElement.nativeElement, this.options, this.data);
            });
  }

  public collapseAll() {
    this.editor.collapseAll();
  }

  public expandAll() {
    this.editor.expandAll();
  }

  public focus() {
    this.editor.focus();
  }

  public get(): JSON {
    return this.editor.get();
  }

  public getMode(): JsonEditorMode {
    return this.editor.getMode() as JsonEditorMode;
  }

  public getName(): string {
    return this.editor.getName();
  }

  public getText(): string {
    return this.editor.getText();
  }

  public set(json: JSON) {
    this.editor.set(json);
  }

  public setMode(mode: JsonEditorMode) {
    this.editor.setMode(mode);
  }

  public setName(name: string) {
    this.editor.setName(name);
  }

  public setSchema(schema: any) {
    this.editor.setSchema(schema);
  }

  public destroy() {
    this.editor.destroy();
  }
}

export type JsonEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';

export interface JsonEditorTreeNode {
  field: String,
  value: String,
  path: String[]
}

export class JsonEditorOptions {
  public ace: Object;
  public ajv: Object;
  public onChange: () => void;
  public onEditable: (node: JsonEditorTreeNode | {}) => boolean | { field: boolean, value: boolean };
  public onError: (error: any) => void;
  public onModeChange: (newMode: JsonEditorMode, oldMode: JsonEditorMode) => void;
  public escapeUnicode: boolean;
  public sortObjectKeys: boolean;
  public history: boolean;
  public mode: JsonEditorMode;
  public modes: JsonEditorMode[];
  public name: String;
  public schema: Object;
  public search: boolean;
  public indentation: Number;
  public theme: Number;

  constructor() {
    this.escapeUnicode = false;
    this.sortObjectKeys = false;
    this.history = true;
    this.modes = ['tree'];
    this.search = true;
    this.indentation = 4;
  }

}