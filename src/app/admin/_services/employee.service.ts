import {Injectable} from '@angular/core';
import {ResourceService} from "../_classes/ResourceService";
import {HttpClient} from "@angular/common/http";
import {EmployeeTypeBase} from "../_types/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ResourceService<EmployeeTypeBase> {


  constructor(private http: HttpClient) {
    super(http, EmployeeTypeBase, 'employee')
  }

}
