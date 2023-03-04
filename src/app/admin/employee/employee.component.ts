import {Component, OnInit} from '@angular/core';
import {EmployeeTypeBase} from "../_types/employee";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../_services/employee.service";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeEditNewComponent} from "./employee-edit-new/employee-edit-new.component";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns = ['id', 'name', 'family', 'mobile', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {
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
    const dialogRef = this.dialog.open(EmployeeEditNewComponent, {
      width: '350px',
    })
    dialogRef.afterClosed().subscribe(() => {
      this.loadData()
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
