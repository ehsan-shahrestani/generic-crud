import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.log(error)
        switch (error.status) {
          case 0: // 500 Internal Server Error
            this.toastr.error(
              'pleas check your internet!',
              'no connection'
            );
            break;
          default:
            this.toastr.error(
              'pleas check your internet!',
              'no connection'
            );
            break;

        }
        return throwError(() => error);
      }),
    );
  }

}
