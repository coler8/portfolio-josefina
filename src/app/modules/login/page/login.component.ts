import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteUrls } from 'src/app/core/models/enums/route-urls.enum';
import { LoginService } from 'src/app/services/login.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public type = 'password';
  public showPass = false;
  public loginForm!: FormGroup;
  public user$: Observable<any>;


  constructor(
    private formBuilder: FormBuilder,
    private utilitiesService: UtilitiesService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.nonNullable.group({
      email: ['', [Validators.required, this.utilitiesService.emailOrNull, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });
  }

  get fieldsError(): any { return this.loginForm.controls; }

  ngOnInit(): void {
    this.user$ = this.loginService.authState;
  }

  public showPassword(): void {
    this.showPass = !this.showPass;
    this.type = this.showPass ? 'text' : 'password';
  }


  public onSubmitLogin(): void {
    this.loginService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(() => {
      this.router.navigate([RouteUrls.blog]);
    }).catch((err) => {
      const msgErrorCode = this.utilitiesService.checkErrorsValidation(err.code);
      alert(msgErrorCode);
    });
  }

  public logout(): void {
    this.loginService.signOut();
  }

}
