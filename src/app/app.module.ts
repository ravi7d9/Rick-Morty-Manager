import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './module/material.module';
import { SpeciesComponent } from './species/species.component';
import { GenderComponent } from './gender/gender.component';
import { OriginComponent } from './origin/origin.component';
import { SelectedFilterComponent } from './selected-filter/selected-filter.component';
import { CardManagerComponent } from './card-manager/card-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    GenderComponent,
    OriginComponent,
    SelectedFilterComponent,
    CardManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
