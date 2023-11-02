import { Injectable } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/message';
import { AuthService } from '../_services/auth.service';
import { PaginationResult } from '../_models/pagination';

@Injectable()
export class MessagesResolver {//implements Resolve<Message[]> {

    pageNumber = 1;
    pageSize = 12;
    messageContainer = 'Nieprzeczytane';

    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService,
                private authService: AuthService) {}

                resolve(route: ActivatedRouteSnapshot): Observable<PaginationResult<Message[]>> {
                    return this.userService.GetMessages(this.authService.decodedToken.nameid, this.pageNumber, 
                                                        this.pageSize, this.messageContainer).pipe(
                        catchError(error => {
                            this.alertify.error('Problem z wyszukaniem wiadomości');
                            this.router.navigate(['/home']);
                            return of(null);
                        })
                    );
                }
}
