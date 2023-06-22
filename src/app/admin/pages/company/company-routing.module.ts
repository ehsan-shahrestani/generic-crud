import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company.component';
import {AddEmployeeComponent} from "../employee/components/add-employee/add-employee.component";
import {EditCompanyComponent} from "./components/edit-company/edit-company.component";
import {NewCompanyComponent} from "./components/new-company/new-company.component";

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
    path: 'add',
    component: NewCompanyComponent,
  },
  {
    path: 'edit/:id',
    component: EditCompanyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
