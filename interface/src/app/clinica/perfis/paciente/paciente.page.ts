import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

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

  toDisplayPaciente = false;
  
  paciente() {
    this.toDisplayPaciente = !this.toDisplayPaciente;  
  }

  displayPaciente = false;
  
  openList() {
    this.displayPaciente = !this.displayPaciente;  
  }
  
  
  

  

}
