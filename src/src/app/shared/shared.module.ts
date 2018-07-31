import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDividerModule,MatListModule, BrowserAnimationsModule ],
  exports: [BrowserModule, FormsModule, MatButtonModule, MatCardModule, MatSelectModule, MatToolbarModule, MatDividerModule,MatListModule, BrowserAnimationsModule ]
})
export class SharedModule { }