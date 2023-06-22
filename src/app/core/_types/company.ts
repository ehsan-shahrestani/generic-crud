import {GenericType} from "../_classes/baseType";

export class CompanyTypeBase extends GenericType<CompanyTypeBase> {
  name?: string;
  logo?: string;
  fax?: string;
  phone?: string;
  family?:string

  // get getFamilly(){
  //   return this.name  +''+ this.family
  // }

  constructor(model?: Partial<CompanyTypeBase>) {
    super(model);
  }
}
