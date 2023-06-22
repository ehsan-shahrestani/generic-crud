import {Component} from '@angular/core';
import {UpdateGeneric} from "../../../../../core/_classes/update-generic";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeTypeBase} from "../../../../../core/_types/employee";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent extends UpdateGeneric<EmployeeService, EmployeeTypeBase> {
  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    super(employeeService, toastrService, router, route, 'admin/employee', 'employee');
    this.oneObjectFrom = this.fb.group({
      "id": [],
      "name": ["", Validators.required],
      "family": ["", Validators.required],
      "mobile": ["", Validators.required],
    })
  }

  get form() {
    return this.oneObjectFrom.controls
  }


}
