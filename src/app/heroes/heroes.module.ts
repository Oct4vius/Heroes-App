import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';
import { HeroPageComponent } from './pages/heroPage/heroPage.component';
import { ListPageComponent } from './pages/listPage/listPage.component';
import { NewPageComponent } from './pages/newPage/newPage.component';
import { SearchPageComponent } from './pages/searchPage/searchPage.component';
import { CardComponent } from './components/card/card.component';

import { HeroesImagePipe } from './pipes/heroesImage.pipe';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';

@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,

    //Pipes
    HeroesImagePipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,

    MaterialModule
  ]
})
export class HeroesModule { }
