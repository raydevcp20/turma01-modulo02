import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.css'
})
export class CriarComponent implements OnInit{
  isEdit: boolean = true;
  createForm: any;
  produto: any = {
    "nome": "iphone 15 sdsd",
    "sku": "12345678",
    "link": "https://cdn.awsli.com.br/600x700/1861/1861669/produto/248526003/apple-iphone-15-pro-max--256-gb--tit-nio-azul--2--rqs5ylol0t.jpg",
    "preco": 12,
    "quantidadeEstoque": 12,
    "descricao": "",
    "categoria": "eletronicos"
  }


  constructor(private fb: FormBuilder){
    this.createForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sku: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      link: [{value: '', disabled: true}, [Validators.required, Validators.pattern(/^https:\/\//)]],
      preco: ['', [Validators.required, Validators.min(0)]],
      qttEstoque: ['', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$')]],
      descricao:['', Validators.maxLength(200)],
      categoria: ['', Validators.required],
      endereco: this.fb.group({
        rua: ['']
      })
    })
    if(this.isEdit){
      this.createForm.patchValue(this.produto);
      this.createForm.get('qttEstoque').setValue(this.produto.quantidadeEstoque);

      this.createForm.get('sku').disable();
    }
    
  }

  ngOnInit(){
  }

  salvarProduto(){
    if(this.isEdit){
      console.log("Edição: ", this.createForm.value);
    }else{
      console.log("Criação: ", this.createForm.value);
    }
  }

  limparProduto(){}
}
