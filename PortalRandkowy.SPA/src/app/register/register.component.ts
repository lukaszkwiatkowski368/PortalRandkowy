import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  user: User;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private authService: AuthService, private fb: FormBuilder, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-dark-blue'
    },
    this.createRegisterForm();
  }

  passwordMatchValidator(fg: FormControl) {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : { mismatch: true};
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      confirmPassword: ['', Validators.required],
      gender: ['female'],
      dateOfBirth: [null, Validators.required],
      zodiacSign: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    }, {validator: this.passwordMatchValidator});
  }

  register() {
    if (this.registerForm.valid) {
    this.user = Object.assign( {}, this.registerForm.value);
    this.authService.register(this.user).subscribe(() => {
      this.alertify.success('rejestracja udana');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.authService.login(this.user).subscribe( () => {
          this.router.navigate(['/uzytkownicy']);
      });
    });
  }
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
