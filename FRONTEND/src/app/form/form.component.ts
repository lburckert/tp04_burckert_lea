import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /* form!: FormGroup;

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
 */

  recapdesable : boolean = true;
  
  lastname : string = "";
  firstname : string = "";
  username : string = "";
  civility : string = "";
  address : string = "";
  city : string = "";
  zip : string = "";
  state : string = "";
  email : string = "";
  phone : string = "";
  password : string = "";
  confirmPassword : string = "";

  validForm : boolean = true;
  validLastname : boolean = true;
  validFirstname : boolean = true;
  validUsername : boolean = true;
  validCivility : boolean = true;
  validAddress : boolean = true;
  validCity : boolean = true;
  validZip : boolean = true;
  validState : boolean = true;
  validEmail : boolean = true;
  validPhone : boolean = true;
  validPassword : boolean = true;
  validConfirmPassword : boolean = true;

  regexFirstnameLastnameCity : RegExp = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\-]+$");
  regexAddress : RegExp = new RegExp("^[0-9]{1,3}[\\s].[\\sA-Za-zÀ-ÖØ-öø-ÿ\-\']+$");
  regexZip : RegExp = new RegExp("^[0-9]{5}$");
  regexEmail : RegExp = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\-\.]+@[A-Za-zÀ-ÖØ-öø-ÿ\-\.]+[\.].[A-Za-z]+$");
  regexPhone : RegExp = new RegExp("^([0-9]{2}){5}$");
  regexUsername : RegExp = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ0-9]+$");
  regexPassword : RegExp = new RegExp("^[\\S]+$");

  onSubmit() : void {
    this.validLastname = this.validateInput(this.lastname, this.regexFirstnameLastnameCity);
    this.validFirstname = this.validateInput(this.firstname, this.regexFirstnameLastnameCity);
    this.validUsername = this.validateInput(this.username, this.regexFirstnameLastnameCity);
    this.validCivility = this.validateDropDownSelection(this.civility);
    this.validAddress = this.validateInput(this.address, this.regexAddress);
    this.validCity = this.validateInput(this.city, this.regexFirstnameLastnameCity);
    this.validZip = this.validateInput(this.zip, this.regexZip);
    this.validState = this.validateDropDownSelection(this.state);
    this.validEmail = this.validateInput(this.email, this.regexEmail);
    this.validPhone = this.validateInput(this.phone, this.regexPhone);
    this.validPassword = this.validateInput(this.password, this.regexPassword);
    this.validConfirmPassword = this.validatePasswordMatch(this.password, this.confirmPassword);
    this.recapdesable = false;
  }

  ngOnInit(): void {
  }

  validateInput(input : string, regex : RegExp) : boolean {
    if(! regex.test(input)) {
      return false;
    }
    else {
      return true;
    }
  }

  validateDropDownSelection(selection : string) : boolean {
    if(selection == "") {
      return false;
    }
    else {
      return true;
    }    
  }

  validatePasswordMatch(passwordInput : string, confirmPasswordInput : string) : boolean {
    if(passwordInput != confirmPasswordInput) {
      return false;
    }
    else {
      return true;
    }
  }
}