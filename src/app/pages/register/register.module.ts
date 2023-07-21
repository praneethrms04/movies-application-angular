import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccessComponent } from 'src/app/shared/success/success.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent, SuccessComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class RegisterModule {}
