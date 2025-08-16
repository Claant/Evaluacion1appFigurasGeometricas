import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonList, IonInput, IonCardTitle, IonCardSubtitle, IonImg, IonCardHeader, IonCard, IonCardContent, IonText } from '@ionic/angular/standalone';
import { TrianguloEscaleno, FiguraGeometrica } from '../fGeometricas/calculo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-triangulo',
  standalone:true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonText, IonCardContent, IonCardTitle, IonImg, IonCardHeader, IonCardSubtitle, FormsModule, IonItem, IonList, IonInput, CommonModule, IonButton, IonCard],

})
export class TrianguloComponent  implements OnInit {

 txtLadoA="";
 txtLadoB="";
 txtLadoC="";
  perimetro=0
  trianguloEscaleno= new TrianguloEscaleno("trianguloEscaleno",0,0,0)
  resultado:string="";


  constructor() { }
  ngOnInit() {}



calcularPerimetroTrianguloEscaleno() {
this.trianguloEscaleno.ladoA=parseInt(this.txtLadoA)
this.trianguloEscaleno.ladoB=parseInt(this.txtLadoB)
this.trianguloEscaleno.ladoC=parseInt(this.txtLadoC)
  this.perimetro=this.trianguloEscaleno.calcularPerimetro()
  this.resultado='El perimetro es : ' + this.perimetro.toFixed(2) + " "+'cm.'


}



}
