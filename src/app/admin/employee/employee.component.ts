import {Component, OnInit} from '@angular/core';
import {EmployeeTypeBase} from "../_types/employee";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../_services/employee.service";
import {ToastrModule, ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns = ['id', 'name', 'family', 'mobile', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(private employeeService: EmployeeService, private toastr : ToastrService) {
  }

  ngOnInit() {
    this.loadData()
  }

  deleteItem(i: number) {
    this.employeeService.delete(i).subscribe({
      next: () => {
        this.loadData()
      }
    })
  }


  edit(i: number) {

  }

  addNew() {

    this.employeeService.create(new EmployeeTypeBase({
      name: "ehsan2",
      family: "shahrestani2",
      mobile: "099059138522"
    })).subscribe({
      next: () => {
        this.loadData()
      }
    })
  }

  loadData() {
    this.employeeService.get().subscribe({
      next: (out) => {
        this.dataSource.data = out
      }
    })
  }
}
