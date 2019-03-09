import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ErrorMessageComponent } from './error/error-message.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ErrorComponent, ErrorMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
