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

@Component({
  selector: 'app-create',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  text = new FormControl({ value: 'Rayane', disabled: false });
  fb = inject(FormBuilder);
  pacienteForm: FormGroup = this.fb.group({
    nome: ['', [Validators.minLength(3), Validators.required]],
    idade: ['', Validators.required],
    endereco: this.fb.group({
      rua: ['', Validators.required],
      cidade: [''],
      estado: [{ value: '', disabled: true }],
    }),
    alergias: this.fb.array([]),
  });

  constructor() {
    // let idadeField = fb.control('');
    // this.pacienteForm =
  }

  validadorNome(control: any) {
    if (control.value === 'Rayane') {
      return { nomeInvalido: { atual: control.value, valorErrado: 'Rayane' } };
    }
    return null;
  }

  ngOnInit() {
    // console.log("valor inicial: ", this.text.value);
    console.log('alergias: ', this.alergias.value);
    console.log('alergias controls: ', this.alergias.controls);
  }

  clicou() {
    if (this.pacienteForm.get('alergias')?.value.length === 0) {
      return alert('Você precisa adicionar pelo menos uma alergia!');
    }
    console.log('Erros: ', this.pacienteForm.get('nome')?.errors);
    console.log('depois que digitei: ', this.text.value);
    console.log('formulário com formBuilder: ', this.pacienteForm.value);
    console.log('alergias.value: ', this.alergias.value);
  }

  inputTeste() {
    console.log('inputTeste: ', this.text.value);
  }

  get alergias() {
    return this.pacienteForm.get('alergias') as FormArray;
  }

  removeAlergia(index: number) {
    this.alergias.removeAt(index);
    console.log('alergias após remoção: ', this.alergias.value);
  }

  addAlergia() {
    this.alergias.push(
      this.fb.group({
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
      })
    );
  }
}
