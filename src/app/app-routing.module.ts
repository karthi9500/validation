import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { OfficeComponent } from './office/office.component';
import { SchoolComponent } from './school/school.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'school',
    component:SchoolComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'college',
    component:CollegeComponent
  },
  {
    path:"office",
    component:OfficeComponent
  },
  {
    path:"",
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:"login",
    component:LoginComponent,
    // redirectTo:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
