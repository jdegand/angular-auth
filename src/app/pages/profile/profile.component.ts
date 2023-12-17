import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  apiService = inject(ApiService)

  ngOnInit() {
    this.apiService.getUser()
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response.user);
        },
        error: () => {
          this.authService.currentUserSig.set(null);
        },
      });
  }

}
