import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { NewCompanyComponent } from './new-company/new-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';


@NgModule({
  declarations: [
    CompanyComponent,
    NewCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class CompanyModule { }
