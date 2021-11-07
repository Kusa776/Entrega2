import { Injectable } from '@angular/core';
import { Viajes } from './viajes.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private viajes: Viajes[] = [];
  
  constructor() { }

  mostrarViajes(){
    return [...this.viajes]
  }

  buscarViajes(id: number){
    return {
      ...this.viajes.find(Viajes =>{
        return Viajes.id === id
      })
    }
  }     
  agregarViajes(nombre: string, precio: number, imagen: string, capacidadTotal: number, descripcion: string){
    this.viajes.push({
        nombre,
        precio, 
        imagen, 
        capacidadTotal, 
        descripcion, 
        id: this.viajes.length+1
    });
  }
  eliminarViajes(id: number){
    this.viajes = this.viajes.filter( viajes =>{
      return  viajes.id !== id
    });
  }
  
}


