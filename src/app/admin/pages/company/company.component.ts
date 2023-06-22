import {Component, OnInit} from '@angular/core';
import {CompanyService} from "./services/company.service";
import {MatTableDataSource} from "@angular/material/table";
import {EmployeeService} from "../employee/services/employee.service";
import {ToastrService} from "ngx-toastr";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  displayedColumns = ['id', 'name', 'address', 'fax', 'actions'];
  dataSource = new MatTableDataSource();

  constructor(
    private companyService: CompanyService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.loadData()
  }

  deleteItem(i: number) {
    this.companyService.delete(i).subscribe({
      next: () => {
        this.loadData()
      }
    })
  }

  loadData() {
    this.companyService.get().subscribe({
      next: (out) => {
        this.dataSource.data = out
      }
    })
  }
}
