import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder

} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LobbyPage } from '../lobby/lobby.page';

@Component({
  selector: 'app-inicio-s',
  templateUrl: './inicio-s.page.html',
  styleUrls: ['./inicio-s.page.scss'],
})
export class InicioSPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertControler: AlertController,
    public navCtrol: NavController) {
     
    this.formularioLogin = this.fb.group({

      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })
  }

  ngOnInit() {

  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrol.navigateRoot('lobby');
    }else{
      const alert = await this.alertControler.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}