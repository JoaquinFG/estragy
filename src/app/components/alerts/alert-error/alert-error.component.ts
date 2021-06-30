import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css'],
})
export class AlertErrorComponent {
  @Input() visibleError: boolean;

  constructor() {
    this.visibleError = false;
  }

  closeAlert() {
    this.visibleError = false;
  }
}
