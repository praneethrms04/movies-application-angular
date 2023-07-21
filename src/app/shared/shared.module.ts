import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ErrorDisplayComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [ErrorDisplayComponent, LoaderComponent],
})
export class SharedModule {}
