import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent {
  @Input() successMsg!: string;
  @Output() customEvent = new EventEmitter<void>();

  clearSuccess() {
    this.customEvent.emit();
  }
}
