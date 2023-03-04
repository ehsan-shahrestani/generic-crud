import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../_services/employee.service";
import {ToastrService} from "ngx-toastr";
import {EmployeeTypeBase} from "../../_types/employee";

export interface DialogData {
  OpenState: 'new' | 'update',
  employee: EmployeeTypeBase
}

@Component({
  selector: 'app-employee-edit-new',
  templateUrl: './employee-edit-new.component.html',
  styleUrls: ['./employee-edit-new.component.scss']
})
export class EmployeeEditNewComponent implements OnInit {

  employeeForm!: FormGroup


  constructor(public dialog: MatDialog,
              private fb: FormBuilder,
              private employeeService: EmployeeService,
              private toastr: ToastrService,
              @Inject(MAT_DIALOG_DATA) public dialogState: DialogData
  ) {
    console.log(this.dialogState.employee)

  }


  ngOnInit() {
    this.employeeForm = this.fb.group({
      "id": [],
      "name": ["", Validators.required],
      "family": ["", Validators.required],
      "mobile": ["", Validators.required],
    })
    if (this.dialogState.employee && this.employeeForm) {
      this.employeeForm.setValue(this.dialogState.employee)
    }
  }

  get form() {
    return this.employeeForm.controls
  }

  get name() {
    return this.employeeForm.get('name')
  }

  submitForm() {
    if (this.dialogState.OpenState == 'new') {
      this.employeeService.create(
        new EmployeeTypeBase(
          this.employeeForm.value
        )
      ).subscribe({
        next: () => {
          this.toastr.success(' successful create employee ', 'successFul')
        }
      })
    } else if (this.dialogState.OpenState == 'update') {
      this.employeeService.update(
        new EmployeeTypeBase(
          this.employeeForm.value
        )
      ).subscribe({
        next: () => {
          this.toastr.success(' successful update employee ', 'successFul')
        }
      })
    }

  }
}
