import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authService = inject(AuthService);

  router = inject(Router);

  logout(){
    console.log('logged out');
    localStorage.clear();
    this.authService.currentUserSig.set(null);
    this.router.navigateByUrl("/");
  }
}
