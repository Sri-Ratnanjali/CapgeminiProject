import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetSpecializationComponent } from './doctors/get-doctor/get-specialization/get-specialization.component';

const routes: Routes = [{
  path: "doctordetails/getbyspecialization/:specialization",
  component: GetSpecializationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
