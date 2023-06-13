import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatDividerModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    MatDividerModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ],
})
export class MyMaterialModule {}
