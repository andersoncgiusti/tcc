import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fisioterapeuta',
  templateUrl: './fisioterapeuta.page.html',
  styleUrls: ['./fisioterapeuta.page.scss'],
})
export class FisioterapeutaPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  openHome() {
    this.navCtrl.navigateRoot('home');
  }

  openAgenda() {
    this.navCtrl.navigateRoot('agenda');
  }

  openPerfis() {
    this.navCtrl.navigateRoot('perfis');
  }

  openPagamento() {
    this.navCtrl.navigateRoot('pagamento');
  }

  openCriar() {
    this.navCtrl.navigateRoot('perfis');
  }

  openPaciente() {
    this.navCtrl.navigateRoot('perfis/paciente');
  }

  openFisio() {
    this.navCtrl.navigateRoot('perfis/fisioterapeuta');
  }  

  // displayFisio = false;
  
  // openList() {
  //   this.displayFisio = !this.displayFisio;  
  // }

  cadastro = true;
  toDisplayFisio = false;
  
  fisio() {
    this.toDisplayFisio = !this.toDisplayFisio;  
    this.cadastro = !this.cadastro; 
  }

  close() {
    this.cadastro = !this.cadastro; 
    this.toDisplayFisio = !this.toDisplayFisio; 
  }


  

}
