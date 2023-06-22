import {Component} from '@angular/core';
import {EmployeeService} from "../../../employee/services/employee.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {UpdateGeneric} from "../../../../../core/_classes/update-generic";
import {CompanyService} from "../../services/company.service";
import {CompanyTypeBase} from "../../../../../core/_types/company";

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent extends UpdateGeneric<CompanyService, CompanyTypeBase> {
  constructor(
    private companyService: CompanyService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    super(companyService, toastrService, router, route, 'admin/company', 'company');
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
