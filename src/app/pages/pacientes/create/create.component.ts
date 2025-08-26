import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  imports: [
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  text = new FormControl({ value: 'Rayane', disabled: false });
  fb = inject(FormBuilder);
  router = inject(Router);
  pacientForm: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.required]],
    age: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: [''],
      state: [{ value: '', disabled: true }],
    }),
    allergies: this.fb.array([
      this.fb.group({
        name: [''],
        description: [''],
      }),
    ]),
  });

  constructor() {}

  nameValidator(control: any) {
    if (control.value === 'Rayane') {
      return { invalidName: { actual: control.value, wrongName: 'Rayane' } };
    }
    return null;
  }

  ngOnInit() {
    console.log('alergias: ', this.allergies.value);
    console.log('alergias controls: ', this.allergies.controls);
  }

  sendPacient() {
    if (this.pacientForm.get('allergies')?.value.length === 0) {
      return alert('Você precisa adicionar pelo menos uma alergia!');
    }
    console.log('Erros: ', this.pacientForm.get('nome')?.errors);
    console.log('depois que digitei: ', this.text.value);
    console.log('formulário com formBuilder: ', this.pacientForm.value);
    console.log('alergias.value: ', this.allergies.value);
  }

  get allergies() {
    return this.pacientForm.get('allergies') as FormArray;
  }

  addAllergy(): void {
    const allergyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
    this.allergies.push(allergyForm);
  }

  // removeAllergy(index: number): void {
  //   this.allergies.removeAt(index);
  // }

  back() {
    this.router.navigate(['/dashboard']);
  }
}
