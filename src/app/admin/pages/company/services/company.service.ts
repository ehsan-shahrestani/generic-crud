import { Injectable } from '@angular/core';
import {ResourceService} from "../../../../core/_classes/ResourceService";
import {CompanyTypeBase} from "../../../../core/_types/company";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService  extends  ResourceService<CompanyTypeBase>{

  constructor(private http:HttpClient) {
    super(http, CompanyTypeBase , 'company')

  }
}
