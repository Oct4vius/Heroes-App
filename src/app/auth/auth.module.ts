import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layoutPage/layoutPage.component';

import { LoginPageComponent } from './pages/loginPage/loginPage.component';
import { RegisterPageComponent } from './pages/registerPage/registerPage.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    MaterialModule
  ]
})
export class AuthModule { }
