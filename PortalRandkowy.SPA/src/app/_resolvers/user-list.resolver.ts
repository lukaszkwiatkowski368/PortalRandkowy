import { Injectable } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaginationResult } from '../_models/pagination';

@Injectable()
export class UserListResolver {//implements Resolve<User[]> {

    pageNumber = 1;
    pageSize = 12;

    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService) {}

                resolve(route: ActivatedRouteSnapshot): Observable<PaginationResult<User[]>>{
                    return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(
                        catchError(error => {
                            this.alertify.error('Problem z pobraniem danych');
                            this.router.navigate(['']);
                            return of(null);
                        })
                    );
                }
}
