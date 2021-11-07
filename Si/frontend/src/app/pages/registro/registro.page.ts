import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder

} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertControler: AlertController,
    public navCtrol: NavController ) {

    this.formularioRegistro = this.fb.group({
      'uss': new FormControl ("", Validators.required),
      'nombre': new FormControl ("", Validators.required),
      'apellido': new FormControl ("", Validators.required),
      'password': new FormControl ("", Validators.required),
      'confirmacionPassword': new FormControl ("", Validators.required),
    })
  }

  ngOnInit() {
  }

  
  

  async guardar(){
    

    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertControler.create({
        header: 'Error',
        message: 'Registro mal.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }else{
      this.navCtrol.navigateRoot('inicio-s');
    }  
    
    
    var usuario = {
      nombre: f.nombre,
      password: f.password,
      apellido: f.apellido,
      uss: f.uss
      

    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    

  }
  
  

}
