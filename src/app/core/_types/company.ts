import {GenericType} from "../_classes/baseType";

export class CompanyTypeBase extends GenericType<CompanyTypeBase> {
  name?: string;
  logo?: string;
  fax?: string;
  phone?: string;
  address?:string

  constructor(model?: Partial<CompanyTypeBase>) {
    super(model);
  }
}
