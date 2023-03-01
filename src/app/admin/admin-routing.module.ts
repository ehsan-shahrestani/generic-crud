import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./theme/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)},
      {path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
