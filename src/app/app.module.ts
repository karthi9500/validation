import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
// import { F FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { OfficeComponent } from './office/office.component';




@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
       SchoolComponent,
       StudentComponent,
       CollegeComponent,
       OfficeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
    // FormControl,
    // FormGroup,
    // Validators,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
