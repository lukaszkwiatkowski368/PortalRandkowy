import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { NgxGalleryModule, CustomHammerConfig } from 'ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_services/alertify.service';
import { UserService } from './_services/user.service';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UsereListComponent } from './users/usere-list/usere-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavesChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotosComponent } from './users/photos/photos.component';




export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      UsereListComponent,
      LikesComponent,
      MessagesComponent,
      UserCardComponent,
      UserDetailComponent,
      UserEditComponent,
      PhotosComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      FileUploadModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      }),
      RouterModule.forRoot(AppRoutes),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      NgxGalleryModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      UserService,
      AuthGuard,
      ErrorInterceptorProvider,
      UserDetailResolver,
      UserListResolver,
      UserEditResolver,
      PreventUnsavesChanges
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
