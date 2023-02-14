import {Editor} from 'ngx-editor';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  // @ts-ignore
  html = '*** Settings ***\r\nVariables           ../vars/secret/variables-secrets.py\r'

  ngOnInit(): void {
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
  }

  changed($event: any) {
    console.log($event);
  }
}
