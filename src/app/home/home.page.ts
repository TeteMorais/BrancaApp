import { Component } from '@angular/core';
import { ControloService } from '../servico/controlo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public lista: any=[];
  public pagina=1;
  public totalPagina=1;
  constructor(private controlo: ControloService) {}
  ionViewWillEnter(){
    this.listarOff(1);
  }
  public listarOff(paginaOff:number){
    if (paginaOff <= 0) {
      paginaOff=1;
    }
    this.pagina=paginaOff;
    this.controlo.listarOn(paginaOff).subscribe(dado=>{
      this.lista = dado['data'];
      this.totalPagina = dado['total_pages'];
      console.log("Lista: ", this.lista);
    });
  }

}
