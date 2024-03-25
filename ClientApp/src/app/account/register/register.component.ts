import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup([]);
  isSubmitted = false;
  errorMessages: string[] = [];

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],

    })
  }
  register() {
    this.isSubmitted = true;
    this.errorMessages = []

    if (this.registerForm.valid) {
      this.accountService.register(this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log(response);

          },
          error: (error) => {
            console.log(error);

          }
        });
    }

  }

}
