import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeecmpComponent } from './employeecmp/employeecmp.component';
import { StudentcmpComponent } from './studentcmp/studentcmp.component';
;
const routes: Routes = [
 
  {path:'student',component:StudentcmpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
