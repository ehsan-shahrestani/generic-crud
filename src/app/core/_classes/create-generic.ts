import {Observable} from "rxjs";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {Optional} from "@angular/core";
import {ToastrService} from "ngx-toastr";

interface SService<CustomType> {
  create(input: CustomType): Observable<CustomType>
}

export class CreateGeneric<ServiceName extends SService<TypeOut>, TypeOut> {

  isSending = false; // loading indicator on button
  initialData = false; // init status indicator
  _showCreatePage = true; // show dialog variable;

  oneObject!: TypeOut; //for Template driven from
  oneObjectFrom!: FormGroup; // for reactive form

  constructor(private allService: ServiceName,  private toastr: ToastrService, private routerS: Router,
              private returnRoute = '', private entityName = '') {
  }

  set showCreatePage(value: boolean) {
    this._showCreatePage = value;
    if (!value) {
      this.routerS.navigateByUrl(this.returnRoute);
    }
  }

  get showCreatePage(): boolean {
    return this._showCreatePage;
  }

  create() {
    console.log(this.oneObjectFrom.value)
    this.isSending = true;
    this.allService.create(this.oneObjectFrom.value).subscribe({
      next: () => {
        this.toastr.success("Adding " + this.entityName + " It was done successfully.", 'successFul')
        this.isSending = false;
        this.showCreatePage = false;
      }, error: () => {
        this.isSending = false;
      }
    });
    // }
  }

}
