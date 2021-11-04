import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  recapdisable: boolean = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() : void {
      this.form = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required, this.validateZipCode]),
      civility: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, this.validatePhone]),
      email: new FormControl('', [Validators.required, Validators.email]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, this.validatePasswords]),
      confirmpassword: new FormControl('', [Validators.required, this.validatePasswords]),
    });
  }

  validateZipCode() : ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const value : string = control.value;
      if (parseInt(value) === NaN)
        return {NotANumber:true};
      if (parseInt(value) <= 0)
        return {ValueInf0:true};
      return null;
    }
  }

  validatePhone() : ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      const value : string = control.value;
      if (parseInt(value) === NaN)
        return {NotANumber:true};
      if (parseInt(value) <= 0)
        return {ValueInf0:true};
      if (value.length != 10)
        return {ValueLength:true};
      return null;
    }
  }

  // vérification de correspondance entre les deux mots de passe
  validatePasswords() : ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
      return this.password === this.confirmpassword ? null : {PasswordsNotCorresponding:true};
    }
  }

  onSubmit() : void {
    if (this.form.valid)
      console.log(this.form.value);

      this.recapdisable = false;
  }

  get firstname() { return this.form.get("firstname"); }
  get lastname() { return this.form.get("lastname"); }
  get username() { return this.form.get("username"); }
  get address() { return this.form.get("address"); }
  get city() { return this.form.get("city"); }
  get zip() { return this.form.get("zip"); }
  get civility() { return this.form.get("civility"); }
  get state() { return this.form.get("state"); }
  get phone() { return this.form.get("phone"); }
  get email() { return this.form.get("email"); }
  get password() { return this.form.get("password"); }
  get confirmpassword() { return this.form.get("confirmpassword"); }
}