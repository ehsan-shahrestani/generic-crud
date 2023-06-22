import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

interface SService<CustomType> {
  update(input: CustomType): Observable<CustomType>

  getById(id: number): Observable<CustomType>
}

export class UpdateGeneric<ServiceName extends SService<TypeOut>, TypeOut> {

  isSending = false; // loading indicator on button
  initialData = false; // init status indicator
  _showUpdatePage = true; // show dialog variable
  receivingDate = false;
  selectedId: number | null = null
  oneObject!: TypeOut; //for Template driven from
  oneObjectFrom!: FormGroup; // for reactive form

  constructor(private allService: ServiceName, private toastr: ToastrService, private routerS: Router,
              private routeS: ActivatedRoute, private returnRoute = '', private entityName = '') {
    this.routeS.params.subscribe(params => {
      if (+params['id']) {
        this.selectedId = +params['id']
        this.receivingDate = true;
        this.allService.getById(this.selectedId).subscribe(out => {
          this.oneObject = out;
          this.setFormGroupData(out)
          this.receivingDate = false;
          this.afterInitialData();
        });
      }
    })
  }

  afterInitialData() {

  }

  setFormGroupData(out: Partial<TypeOut>) {
    this.oneObjectFrom.patchValue(out);

  }

  set showUpdatePage(value: boolean) {
    this._showUpdatePage = value;
    if (!value) {
      this.routerS.navigateByUrl(this.returnRoute).then(() => {
      });
    }
  }

  get showUpdatePage(): boolean {
    return this._showUpdatePage;
  }

  update() {
    this.isSending = true;
    this.allService.update(this.oneObjectFrom.value).subscribe(out => {
      this.toastr.success("Updating " + this.entityName + " It was done successfully.", 'successFul')
      this.isSending = false;
      this.showUpdatePage = false;
    }, error => {
      this.isSending = false;
    });
  }

}
