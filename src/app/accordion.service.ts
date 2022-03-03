import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  constructor(private http: HttpClient) {
  }

  getAccordion(): Observable<any> {
    return this.http.get('./../assets/faqs.json').pipe(
      map(res => res),
      catchError((err) => {
          console.log('error caught in service - Data is not populated in the service')
          console.error(err);
          return throwError(err);
        }
      ));

  }
}
