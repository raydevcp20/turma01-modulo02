import { Component, Input, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  @Input() status: string = 'comum';
  @Input() value: string = 'teste';
  @Input() data: any = [];
  checkboxDisable: boolean = false;
  mySubscribe: Subscription = new Subscription();

  constructor() {
    console.log('Constructor: Component is created.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //O ngOnChanges é executado depois que qualquer entrada do componente for alterada.
    console.log('ngOnChanges: Input properties changed.', changes);
    
    // O ngOnChanges aceita um argumento SimpleChanges. Este objeto mapeia um Record com 
    // cada nome de entrada do componente para um SimpleChangeobjeto.
  }

  ngOnInit(): void {
    //O ngOnInit é executado após o Angular inicializar todas as entradas dos componentes com seus valores iniciais.
    console.log('ngOnInit: Component initialization logic here.');
    // this.mySubscribe = this.exempleService.get().subscribe({
    //   next: ()=>{},
    //   error: ()=>{}
    // });
  }

  ngDoCheck(): void {
    // O ngDoCheck é executado antes de cada vez que o Angular verifica se há alterações no modelo de um componente.
    // Você pode usar este gancho de ciclo de vida para verificar manualmente se há alterações de estado fora da 
    // detecção normal de alterações do Angular, atualizando manualmente o estado do componente.
    console.log('ngDoCheck: Custom change detection logic.');

    // OBS: Este método é executado com muita frequência e pode impactar significativamente o desempenho da sua página. 
    // Evite definir este hook sempre que possível, usando-o apenas quando não tiver alternativa.
  }


  ngAfterContentInit(){
    // O ngAfterContentInit é executado uma vez depois que todos os filhos aninhados dentro do componente 
    // (seu conteúdo ) foram inicializados.
    console.log('ngAfterContentInit: Content View initialized.');
    let texto = document.getElementById("tagP");
    console.log(texto);
  }

  ngAfterContentChecked(){
    //O ngAfterContentChecked é executado sempre que os filhos aninhados dentro do componente (seu conteúdo) 
    // são verificados quanto a alterações.
    console.log('ngAfterContentChecked: Content View finished your verification.');

    // OBS: Este método é executado com muita frequência e pode impactar significativamente o desempenho da sua página. 
    // Evite definir este hook sempre que possível, usando-o apenas quando não tiver alternativa.
  }

  ngAfterViewInit(): void {
    //O ngAfterViewInit é executado uma vez depois que todos os filhos no modelo do componente (sua view ) 
    // foram inicializados.
    console.log('ngAfterViewInit: View initialized.');
  }

  ngAfterViewChecked(){
    // O ngAfterViewCheckedmétodo é executado sempre que os filhos no modelo do componente (sua view ) 
    // são verificados quanto a alterações.
    console.log('ngAfterContentChecked: View finished your verification.');
    //OBS: Este método é executado com muita frequência e pode impactar significativamente o desempenho 
    // da sua página. Evite definir este hook sempre que possível
  }

  ngOnDestroy(): void {
    // O ngOnDestroy é executado uma vez, pouco antes de um componente ser destruído. 
    // O Angular destrói um componente quando ele não é mais exibido na página, como quando 
    // está oculto @if ou ao navegar para outra página.
    console.log('ngOnDestroy: Cleanup logic before component is destroyed.');
    this.checkboxDisable = false;
    this.data = [];
    // Se você tiver algum serviço ou observável que precise ser limpo, siga o exemplo abaixo:
    // Por exemplo, se você tiver uma assinatura de observável, cancele-a aqui para
    // evitar vazamentos de memória.
    // this.mySubscribe.unsubscribe();
  }

  updateValue(): void {
    this.value = 'Updated value';
    console.log('Value updated to:', this.value);
  }
}
