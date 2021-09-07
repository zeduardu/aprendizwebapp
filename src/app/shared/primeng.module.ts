import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    RippleModule,
    CheckboxModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    DialogModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    ScrollPanelModule,
    RippleModule,
    CheckboxModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    DialogModule
  ],
})
export class PrimengModule { }
