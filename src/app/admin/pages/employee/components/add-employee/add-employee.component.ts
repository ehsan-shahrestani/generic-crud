import {Component} from '@angular/core';
import {CreateGeneric} from "../../../../../core/_classes/create-generic";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeTypeBase} from "../../../../../core/_types/employee";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent extends CreateGeneric<EmployeeService, EmployeeTypeBase> {
  constructor(
    private employeeService: EmployeeService,
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    super(employeeService, toastrService, router, 'admin/employee', 'employee');
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
