import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
  ],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  countryList = ['Ivory Coast', 'Guinea', 'Mali', 'Niger'];
  termList = ['14days', '15days', '30days'];

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.customForm.setValue({
      name: 'Serge',
      phone: '0022897416578',
      dob: new Date(2024, 12, 15),
      term: '14days',
      country: 'Ivory Coast',
      gender: 'Male',
      status: false,
      email: 'gloireadieusam@gmail.com',
      address: 'Yop Carrefour sicomex',
    });
    this.saveForm();
  }

  customForm = this.builder.group({
    name: this.builder.control('', Validators.required),
    email: this.builder.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: this.builder.control('', Validators.required),
    dob: this.builder.control(new Date(2024, 2, 16)),
    term: this.builder.control('', Validators.required),
    country: this.builder.control('', Validators.required),
    address: this.builder.control('', Validators.required),
    gender: this.builder.control('Male'),
    status: this.builder.control(true),
  });

  saveForm() {
    console.log(this.customForm.value);
  }
  clearForm() {
    this.customForm.reset();
  }
}
