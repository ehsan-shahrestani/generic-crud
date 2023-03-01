import { Injectable } from '@angular/core';
import {ResourceService} from "../_classes/ResourceService";
import {CompanyTypeBase} from "../_types/company";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService  extends  ResourceService<CompanyTypeBase>{

  constructor(private http:HttpClient) {
    super(http, CompanyTypeBase , 'company')

  }
}
