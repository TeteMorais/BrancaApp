import { ControloService } from './../servico/controlo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  public lista: any = {};
  public id=1;

  constructor(private controlo: ControloService) { }
  public verOff(){
    this.controlo.verOn(this.id).subscribe(dado=>{
      this.lista = dado['data'];
      console.log("Lista: ", this.lista);
    });
  }
  ngOnInit() {
  }

}
