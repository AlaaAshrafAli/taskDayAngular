import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/)]],
      confirmPassword: ['', Validators.required],
      addresses: this.formBuilder.array([this.createAddressFormGroup()]) // Form array for addresses
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration form submitted.');
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ passwordMismatch: true });
    } else {
      return null;
    }
  }
  createAddressFormGroup() {
    return this.formBuilder.group({
      address: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9\s]+/)]],
      street: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9\s]+/)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      country: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]]
    });
  }
  addAddress() {
    const addresses = this.registerForm.get('addresses') as FormArray;
    addresses.push(this.createAddressFormGroup());
  }
  removeAddress(index: number) {
    const addresses = this.registerForm.get('addresses') as FormArray;
    addresses.removeAt(index);
  }
}
