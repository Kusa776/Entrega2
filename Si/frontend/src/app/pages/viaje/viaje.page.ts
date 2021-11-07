import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/services/detalle.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  detalles: any = [];
  constructor(private activatedRoute: ActivatedRoute, private route: Router, private detalleService: DetalleService){}

  loadViaje() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.detalleService.getThis(paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.detalles = res;

      },
      (err) => {
        console.log(err)
      });
  });

}

ngOnInit() {
  this.loadViaje();
}


}

