import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  success = false;

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  apiService = inject(ApiService);
  router = inject(Router);

  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit() {
    /*
    this.http
      .post<{ user: UserInterface }>('https://api.realworld.io/api/users', {
        user: this.registerForm.value,
      })
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        //this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/');
      });
    */
    this.apiService.register(this.registerForm.getRawValue()).subscribe(response => {
      console.log('res', response);
      this.success = true;
      //localStorage.setItem('token', response.user.token);
      //this.authService.currentUserSig.set(response.user);
      this.router.navigateByUrl('/');
    })
  }

}
