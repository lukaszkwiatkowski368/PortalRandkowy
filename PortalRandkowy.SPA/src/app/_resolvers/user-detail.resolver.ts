import { Injectable } from '@angular/core';
import { UserService } from '../_services/UserService.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserDetailResolver implements Resolve<User> {

    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService) {}

                resolve(route: ActivatedRouteSnapshot): Observable<User> {
                    return this.userService.getUser(route.params.id).pipe(
                        catchError(error => {
                            this.alertify.error('Problem z pobraniem danych');
                            this.router.navigate(['/uzytkownicy']);
                            return of(null);
                        })
                    );
                }
}
