import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfiin',
  templateUrl: './perfiin.page.html',
  styleUrls: ['./perfiin.page.scss'],
})
export class PerfiinPage implements OnInit {

  detalle = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=> {
      this.detalle = JSON.parse(params.detalle);
    });
   }

  ngOnInit() {
    console.log(this.detalle);
  }

}
