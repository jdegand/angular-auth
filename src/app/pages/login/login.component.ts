import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { UserInterface } from '../../interfaces/UserInterface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  apiService = inject(ApiService);
  router = inject(Router);
  error = false;

  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  // add next & error inside the subscription 
  // for error handling
  submit() {
    this.apiService.login(this.loginForm.value)
      .subscribe((response: any) => {
        console.log('response', response);

        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/');
      });
  }
}
