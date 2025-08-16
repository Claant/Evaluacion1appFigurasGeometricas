
// clase abstracta FiguraGeometrica
export abstract class FiguraGeometrica{
nombre: string=""
constructor(nombre: string){
  this.nombre=nombre
}
abstract calcularPerimetro():number

}

// clase Circulo
export class Circulo extends FiguraGeometrica{
radio: number

constructor(nombre:string,radio: number){
super(nombre)
this.radio=radio
}
// funcion calcula el perimetro del circulo
override calcularPerimetro(): number {
return 2 * Math.PI * this.radio
}

}

//clase TringuloEscaleno

export class TrianguloEscaleno extends FiguraGeometrica{
ladoA: number
ladoB: number
ladoC: number

constructor(nombre:string, ladoA: number, ladoB: number, ladoC: number){
  super(nombre)
  this.ladoA=ladoA
  this.ladoB=ladoB
  this.ladoC=ladoC

}

// funcion calculo perimetro triangulo escaleno
override calcularPerimetro(): number {
return this.ladoA+this.ladoB+this.ladoC
}

}
export class TrianguloEquilatero extends TrianguloEscaleno{
ladoAA:number

constructor(nombre:string,ladoA:number, ladoB:number, ladoC: number, ladoAA:number){
super(nombre, ladoA, ladoB, ladoC)
this.ladoAA=ladoAA
}

override calcularPerimetro(): number {
return 3* this.ladoAA
}

}



