import { Component } from '@angular/core';
import {EmployeeService} from "../../../employee/services/employee.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {CreateGeneric} from "../../../../../core/_classes/create-generic";
import {CompanyService} from "../../services/company.service";
import {CompanyTypeBase} from "../../../../../core/_types/company";

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.scss']
})
export class NewCompanyComponent extends CreateGeneric<CompanyService, CompanyTypeBase>{
  constructor(
    private companyService: CompanyService,
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    super(companyService, toastrService, router, 'admin/company', 'company');
    this.oneObjectFrom = this.fb.group({
      "id": [],
      "name": ["", Validators.required],
      "address": ["", Validators.required],
      "fax": ["", Validators.required],
    })
  }

  get form() {
    return this.oneObjectFrom.controls
  }

}
