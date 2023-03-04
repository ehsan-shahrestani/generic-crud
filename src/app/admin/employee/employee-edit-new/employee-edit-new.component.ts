import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../_services/employee.service";
import {ToastrService} from "ngx-toastr";
import {EmployeeTypeBase} from "../../_types/employee";

@Component({
  selector: 'app-employee-edit-new',
  templateUrl: './employee-edit-new.component.html',
  styleUrls: ['./employee-edit-new.component.scss']
})
export class EmployeeEditNewComponent implements OnInit {

  employeeForm!: FormGroup


  constructor(public dialog: MatDialog, private fb: FormBuilder, private employeeService: EmployeeService, private toastr: ToastrService) {

  }


  ngOnInit() {
    this.employeeForm = this.fb.group({
      "name": ["", Validators.required],
      "family": ["", Validators.required],
      "mobile": ["", Validators.required],
    })

  }

  get form() {
    return this.employeeForm.controls
  }

  get name() {
    return this.employeeForm.get('name')
  }

  submitForm() {
    debugger
    this.employeeService.create(
      new EmployeeTypeBase(
        this.employeeForm.value
      )
    ).subscribe({
      next: () => {
        this.toastr.success(' successful create employee ', 'successFul')
      }
    })
  }
}
