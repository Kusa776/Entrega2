import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  API = "http://localhost:1337/detalles";

  constructor(private cliente: HttpClient) { }

  getAll(){

    return this.cliente.get(this.API)

  }
  
  getThis(id: string){
    return this.cliente.get(`${this.API}/${id}`);
  }

  crearViaje(nombreViaje : string, precioViaje: number, descripcionViaje: string, horaSalida:Time, cantidadPasajeros: number, urlImagen: string){

    return this.cliente.post(this.API, {nombreViaje, precioViaje, descripcionViaje, horaSalida, cantidadPasajeros, urlImagen})
  }

  eliminarViaje(id: string){
    return this.cliente.delete(`${this.API}/${id}`)
  }
  public post(url:string, body){
    return this.cliente.post(url,body); // POST  
  }
}
