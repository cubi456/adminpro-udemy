import { Component, Input, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress!: ElementRef;

  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() porcentaje:number = 50;

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('leyenda',this.leyenda);
    console.log('porcentaje',this.porcentaje)
   }

  ngOnInit(): void {
  }

  onChanges(newValue:number)
  {
    if(newValue>=100)
      this.porcentaje=100;
    else if(newValue<=0)
            this.porcentaje=0;
         else
           this.porcentaje = newValue;
    this.txtProgress.nativeElement.value=Number(this.porcentaje);
    this.cambioValor.emit(this.porcentaje);
    
    //foco
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor(valor:number)
  {
    if(this.porcentaje+valor <=100 && this.porcentaje+valor>=0)
      {
        this.porcentaje += valor;
        this.cambioValor.emit(this.porcentaje);
      }
  
  }
}
