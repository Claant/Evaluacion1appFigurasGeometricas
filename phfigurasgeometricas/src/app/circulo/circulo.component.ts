import { Component, OnInit } from '@angular/core';
import { IonInput, IonList, IonItem, IonButton, IonText, IonCard, IonCardSubtitle, IonCardHeader, IonImg, IonCardTitle, IonCardContent} from '@ionic/angular/standalone';
import { Circulo, FiguraGeometrica } from '../fGeometricas/calculo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone:true,
  imports: [IonCardContent, IonCardTitle, IonImg, IonCardHeader, IonCardSubtitle, IonText, FormsModule, IonItem, IonList, IonInput, CommonModule, IonButton, IonCard],

})
export class CirculoComponent  implements OnInit {
  txtRadio="";
  area=0
  circulo= new Circulo("circulo",0)
  resultado:string="";

  constructor() { }
  ngOnInit() {}


calcularPerimetroCirculo() {
  this.circulo.radio=parseInt(this.txtRadio)
  this.area=this.circulo.calcularPerimetro()
  this.resultado='El perimetro es : ' + this.area.toFixed(2) + " "+'cm.'
 }


}
