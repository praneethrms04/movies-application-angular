import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css'],
})
export class ErrorDisplayComponent {
  @Input() errorMessage!: string;
  @Output() customEvent = new EventEmitter<void>();

  clearError() {
    this.customEvent.emit();
  }
}
