import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: [''],
      fullName: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  onRegister() {
    const { username, fullName, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!username || !fullName || !password) {
      alert('All fields are required');
      return;
    }

    const usersDB = JSON.parse(localStorage.getItem('usersDB') || '[]');

    const userExists = usersDB.find((u: any) => u.username === username);
    if (userExists) {
      alert('Username already taken. Choose an other one.');
      return;
    }

    usersDB.push({ username, fullName, password });
    localStorage.setItem('usersDB', JSON.stringify(usersDB));

    alert('Registration complete');
    this.registerForm.reset();
  }
}
