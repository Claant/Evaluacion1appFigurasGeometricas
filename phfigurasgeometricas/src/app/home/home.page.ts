import { Component } from '@angular/core';
import { IonHeader, IonSelect, IonToolbar, IonSelectOption, IonTitle, IonContent, IonItem, IonList, IonCol, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports: [IonHeader, CommonModule, IonSelectOption, IonSelect, IonToolbar, IonContent, IonSelect, CirculoComponent, TrianguloComponent],

})
export class HomePage {
tiposFiguraGeometricas:string=""
constructor() {}

esTriangulo(){ return this.tiposFiguraGeometricas== "triangulo"}
esCirculo(){ return this.tiposFiguraGeometricas== "circulo"}

manejartiposFiguraGeometricas($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
this.tiposFiguraGeometricas=$event.detail.value

}
}
