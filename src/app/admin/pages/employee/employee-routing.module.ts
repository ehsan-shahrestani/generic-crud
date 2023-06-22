import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee.component';
import {AddEmployeeComponent} from "./components/add-employee/add-employee.component";
import {EditEmployeeComponent} from "./components/edit-employee/edit-employee.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: []
  },
  {
    path: 'add',
    component: AddEmployeeComponent,
  },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
