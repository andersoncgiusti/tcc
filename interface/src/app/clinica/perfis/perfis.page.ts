import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.page.html',
  styleUrls: ['./perfis.page.scss'],
})
export class PerfisPage implements OnInit {

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

  
 
  ngOnInit() {
  }
}
