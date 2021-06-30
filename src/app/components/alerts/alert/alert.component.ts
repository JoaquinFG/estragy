import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() visible: boolean;

  constructor() { this.visible=false; }

  closeAlert(){
    this.visible=false;
  }

}
