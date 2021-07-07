import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  photoUrl: string;
  @ViewChild('editForm', {static: false}) editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService,
              private userService: UserService,
              private authServece: AuthService ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.authServece.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
    });

  }
updateUser() {
  this.userService.updateUser(this.authServece.decodedToken.nameid, this.user)
  .subscribe(next => {
    this.alertify.success('Profil pomyślnie zaktualizowany');
    this.editForm.reset(this.user);
  }, error => {
    this.alertify.error(error);
  });
}

updateMainPhoto(photoUrl){
  this.user.photoUrl = photoUrl;
}
}
