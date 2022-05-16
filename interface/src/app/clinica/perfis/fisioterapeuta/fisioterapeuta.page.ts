import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fisioterapeuta',
  templateUrl: './fisioterapeuta.page.html',
  styleUrls: ['./fisioterapeuta.page.scss'],
})
export class FisioterapeutaPage implements OnInit {

  constructor(private navCtrl: NavController) {}

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

  toDisplayPaciente = false;
  
  fisio() {
    this.toDisplayPaciente = !this.toDisplayPaciente;  
  }

  ngOnInit() {
  }

}
