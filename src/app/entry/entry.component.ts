import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component } from '@angular/core'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html'
})
export class EntryComponent {
  loginForm: FormGroup;
  showRegister: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  toggleRegister(event: Event) {
    this.showRegister = (event.target as HTMLInputElement).checked;
  }

  noSubmit() {
    const { username, password } = this.loginForm.value;

    if (!username || !password) {
      alert('Username and password are required');
      return;
    }

    if (this.authService.login(username, password)) {
      alert('Login successful');
      this.router.navigate(['/post']);
    } else {
      alert('Invalid username or password');
    }
  }
}
